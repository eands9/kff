<template>
  <div
    class="w-full right-0 md:w-80 bg-white top-28 md:top-16 absolute rounded-md shadow-lg z-30"
  >
    <h4
      class="text-sm text-black font-bold w-full p-4 border-b-2 border-solid border-light-grayish-blue"
    >
      Cart
    </h4>
    <div class="p-4 h-40">
      <div v-if="cartQuantity > 0">
        <div class="flex gap-x-6 items-center">
          <img
            src="@/assets/images/image-product-1.jpg"
            class="w-12 h-12 rounded-md"
            alt=""
          />
          <div class="flex flex-col items-start">
            <h4 class="font-light text-gray-500">
              Fall Limited Edition Sneakers
            </h4>
            <p class="text-gray-500">
              $125 x {{ cartQuantity }}
              <span class="text-black font-bold">${{ cartTotal }}</span>
            </p>
          </div>
          <i
            class="fas flex flex-1 justify-end fa-trash-alt cursor-pointer text-gray-400"
            @click="clearCart"
          ></i>
        </div>
        <button
          @click="updateCartQuantity"
          class="bg-orange w-full py-2 rounded-md shadow-md text-white font-bold mt-6"
        >
          Checkout
        </button>
      </div>
      <div class="flex justify-center items-center h-full" v-else>
        <p class="text-gray-500 font-bold">Your cart is empty.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
// import store from "../store/index";
export default {
  setup() {
    const cartQuantity = computed(() => {
      return;
      // return store.state.cartQuantity;
    });

    const cartTotal = computed(() => {
      return;
      // return store.state.cartQuantity * 125 + ".00";
    });

    const clearCart = () => {
      console.log("here");
      // store.methods.clearCart();
    };

    // return { cartQuantity, cartTotal, clearCart };
  },
};
</script>
