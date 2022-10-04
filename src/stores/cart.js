import { objectToString } from "@vue/shared";
import { defineStore } from "pinia";

export const useCartStore = defineStore({
  id: "cartStore",
  state: () => ({
    cart: [],
    cartOpen: false,
  }),
  actions: {
    toggleCart() {
      this.cart.cartOpen = !this.cart.cartOpen;
    },
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
      const index = this.cart.findIndex((object) => {
        return object.id === item.id;
      });

      if (item && item.quantity > 0) {
        this.cart[index].quantity--;
        if (item.quantity === 0) {
          this.clearCart(product);
        }
      }
    },
    updateQuantity(product, qty) {
      const index = this.cart.findIndex((object) => {
        return object.id === product.id;
      });

      this.cart[index].quantity = qty;
    },
    clearCart(product) {
      // Delete record from card/cart and not cartTotal
      let item = this.cart.find((i) => i.id === product.id);
      const index = this.cart.findIndex((object) => {
        return object.id === item.id;
      });
      this.cart.splice(index, 1);
    },
  },
  getters: {
    productQuantity: (state) => (product) => {
      const item = state.cart.find((i) => i.id === product.id);

      if (item) return item.quantity;
      else return 0;
    },
    productSubTotal: (state) => (product) => {
      const item = state.cart.find((i) => i.id === product.id);

      if (item) return item.quantity * item.price;
    },
    totalQuantity: (state) => () => {
      let totalQty = 0;

      state.cart.forEach((element) => {
        totalQty = totalQty + element.quantity;
      });

      if (totalQty) return totalQty;
      else return 0;
    },
    totalAmount: (state) => () => {
      let subTotal = 0;

      state.cart.forEach((element) => {
        subTotal = subTotal + element.price * element.quantity;
      });

      return subTotal;
    },
  },
});
