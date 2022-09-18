import { defineStore } from "pinia";

export const useCartStore = defineStore({
  id: "cartStore",
  state: () => ({
    cart: [],
    cartTotal: [],
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

      if (item) {
        item.quantity--;
      }
    },
    addToCart(product) {
      let item = this.cart.find((i) => i.id === product.id);
      this.cartTotal.push({ item });
    },
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
  },
});
