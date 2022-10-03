<template>
  <div
    class="w-full right-0 sm:w-80 sm:top-16 bg-white top-28 absolute rounded-md shadow-lg"
  >
    <h4
      class="bg-lime-600 text-white text-sm font-bold p-4 border-b-2 border-solid border-light-grayish-blue shadow-lg"
    >
      Cart
    </h4>
    <div class="p-4 h-40" v-for="product in storeCart.cart" :key="product.id">
      <div>
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
              ${{ product.price }} x {{ product.quantity }}
              <span class="text-black font-bold">${{ storeCart.productSubTotal(product) }}</span>
            </p>
          </div>
          <i
            class="fas flex flex-1 justify-end fa-trash-alt cursor-pointer text-gray-400"
            @click="storeCart.clearCart(product)"
          ></i>
        </div>

      </div>        

      <!-- <div class="flex justify-center items-center h-full" v-else>
        <p class="text-gray-500 font-bold">Your cart is empty.</p>
      </div> -->
    </div>      <button
          class="bg-lime-600 w-full py-2 rounded-md shadow-md text-white font-bold mt-6"
        >
          Checkout
        </button>
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
