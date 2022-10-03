<template>
  <div
    class="w-full right-0 sm:w-80 sm:top-16 bg-white top-28 absolute rounded-md shadow-lg"
  >
    <div
      class="flex bg-lime-600 justify-between items-center text-white text-sm font-bold p-4 border-b-2 border-solid border-light-grayish-blue shadow-lg"
    >
      <h4>Cart</h4>
      <i class="pr-2 fas fa-solid fa-times" @click="storeCart.toggleCart()"></i>
    </div>

    <div v-if="storeCart.totalQuantity() > 0" class="p-4 h-40">
      <div v-for="product in storeCart.cart" :key="product.id">
        <div class="flex gap-x-6 items-center">
          <!-- <img
            src="@/assets/images/image-product-1.jpg"
            class="w-12 h-12 rounded-md"
            alt=""
          /> -->
          <div class="flex flex-col items-start">
            <h4 class="font-light text-gray-500">
              {{ product.name }}
            </h4>
            <p class="text-gray-500">
              ${{ product.price }} x {{ product.quantity }} =
              <span class="text-black font-bold"
                > ${{ storeCart.productSubTotal(product) }}</span
              >
            </p>
          </div>
          <i
            class="fas flex flex-1 justify-end fa-trash-alt cursor-pointer text-gray-400"
            @click="storeCart.clearCart(product)"
          ></i>
        </div>
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
