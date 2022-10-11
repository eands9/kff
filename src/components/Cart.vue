<template>
  <div
    class="w-full right-0 w-80 top-14 bg-white absolute rounded-md shadow-lg"
  >
    <div
      class="flex bg-lime-600 justify-between items-center text-white text-sm font-bold p-4 border-b-2 border-solid border-light-grayish-blue shadow-lg"
    >
      <h4>Cart</h4>
      <i class="pr-2 fas fa-solid fa-times" @click="storeCart.toggleCart()"></i>
    </div>

    <!-- <div v-if="Object.keys(storeCart).length !== null && storeCart.constructor === Object" class="p-4"> -->
    <div v-if="storeCart.totalAmount() > 0" class="p-4">
      <div v-for="product in storeCart.cart" :key="product.id">
        <div class="flex items-center pt-5">
          <div class="flex flex-col items-start">
            <h4 class="font-light text-gray-500">
              {{ product.name }}
            </h4>
            <p class="text-gray-500">
              ${{ product.price }} x {{ product.quantity }} =
              <span class="text-black font-bold">
                ${{ storeCart.productSubTotal(product) }}</span
              >
            </p>
          </div>

          <div class="flex justify-center">
            <div class="mb-3 xl:w-96">
              <input
                @change="storeCart.updateQuantity(product, product.quantity)"
                type="number"
                class="form-control block w-10 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleNumber0"
                v-model="product.quantity"
              />
            </div>
          </div>

          <i
            class="fas flex flex-1 justify-end fa-trash-alt cursor-pointer text-gray-400"
            @click="storeCart.clearCart(product)"
          ></i>
        </div>
      </div>
      <h3>__________________</h3>
      <div class="flex justify-between items-center w-1/2">
        <h4 class="font-light text-gray-500">Total</h4>
        <span class="text-black font-bold text-lg"
          >${{ storeCart.totalAmount() }}</span
        >
      </div>

      <button
        class="bg-lime-600 w-full py-2 rounded-md shadow-md text-white font-bold mt-6"
      >
        Checkout
      </button>
    </div>
    <div v-else class="flex justify-center items-center h-full pt-7">
      <p class="text-gray-500 font-bold">Your cart is empty.</p>
    </div>
  </div>
</template>

<script>
// import { mapStores } from "pinia";
// import useUserStore from "@/stores/user";
import { useCartStore } from "@/stores/cart";
// import { computed } from "@vue/reactivity";
// import store from "../store/index";
export default {
  setup() {
    const storeCart = useCartStore();

    return { storeCart };
    //   const cartQuantity = computed(() => {
    //     return store.state.cartQuantity;
    //   });

    //   const cartTotal = computed(() => {
    //     return store.state.cartQuantity * 125 + ".00";
    //   });

    //   const clearCart = () => {
    //     store.methods.clearCart();
    //   };

    //   return { cartQuantity, cartTotal, clearCart };
  },
};
</script>

<style>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
