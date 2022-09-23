import { defineStore } from "pinia";

export const useCartStore = defineStore({
  id: "cartStore",
  state: () => ({
    cart: [],
  }),
  actions: {
    increaseQuantity(product) {
      let item = this.cart.find((i) => i.id === product.id);

      if (item) {
        item.quantity++;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
    },
    decreaseQuantity(product) {
      let item = this.cart.find((i) => i.id === product.id);

      if (item && item.quantity > 0) {
        item.quantity--;
        if (item.quantity === 0) {
          let item2 = this.cart.find((i) => i.id === product.id);
          this.cart.splice(this.cart.indexOf(item2.id, 1));
        }
      }
    },
    // addToCart(product) {
    //   let item = this.cart.find((i) => i.id === product.id);
    //   let itemInCart = this.cartTotal.find((j) => j.id === product.id);

    //   if (itemInCart) {
    //     this.cartTotal.splice(this.cartTotal.indexOf(itemInCart.id, 1));
    //     this.cartTotal.push({ ...item });
    //   } else {
    //     this.cartTotal.push({ ...item });
    //   }
    // },
    clearCart(product) {
      // Delete record from card/cart and not cartTotal
      let item = this.cart.find((i) => i.id === product.id);
      this.cart.splice(this.cart.indexOf(item.id, 1));
    },
  },
  getters: {
    productQuantity: (state) => (product) => {
      const item = state.cart.find((i) => i.id === product.id);

      if (item) return item.quantity;
      else return 0;
    },
    totalQuantity: (state) => () => {
      let totalQty = 0;

      state.cart.forEach((element) => {
        totalQty = totalQty + element.quantity;
      });

      if (totalQty) return totalQty;
      else return 0;
    },
  },
});
