import { defineStore } from "pinia";

// function updateLocalStorage(cart) {
//   localStorage.setItem("cart", JSON.stringify(cart));
// }

export const useCartStore = defineStore({
  id: "cartStore",
  state: () => ({
    cart: [],
    cartQuantity: 0,
    cartTotal: 0,
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

      //   if (this.cartQuantity < 1) return;
      //   this.cartQuantity--;
    },
    // updateCart(payload) {
    //   this.cartQuantity += payload;
    // },
    clearCart() {
      this.cartQuantity = 0;
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
