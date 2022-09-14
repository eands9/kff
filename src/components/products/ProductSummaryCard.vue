<template>
  <div class="card">
    <h2>{{ product.name }}</h2>
    <h3 class="price">${{ product.price.toFixed(0) }} / lb</h3>
    <img :src="product.image" />
    <div class="flex flex-col md:flex-row gap-y-4 gap-x-2">
      <div
        class="bg-light-grayish-blue flex rounded-md p-4 md:w-1/3 justify-between items-center"
      >
        <button
          class="text-lime-500 text-3xl font-bold"
          @click="storeCart.decreaseQuantity(product)"
        >
          -
        </button>
        <span class="font-bold text-lime-500">{{
          storeCart.productQuantity(product)
        }}</span>
        <button
          class="text-lime-500 text-3xl font-bold"
          @click="storeCart.increaseQuantity(product)"
        >
          +
        </button>
      </div>
      <div class="justify-center items-center">
        <button
          class="bg-lime-500 flex flex-1 py-2 px-2 rounded-md gap-x-2 shadow-md hover:opacity-60 hover:shadow-2xl"
        >
          <i class="fas fa-shopping-cart text-white text-sm"></i>
          <span class="text-white">Add to Cart</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from "@/stores/cart";
export default {
  props: ["product"],
  setup() {
    const storeCart = useCartStore();

    return { storeCart };
  },
  // computed: {
  //   description() {
  //     return this.product.substring(0, 150);
  //   },
  // },

  // setup() {
  //   const cartCount = ref(0);

  //   const updateCardCount = (action) => {
  //     if (action === "decrease" && cartCount.value < 1) {
  //       return;
  //     }
  //     action === "increase" ? cartCount.value++ : cartCount.value--;
  //   };

  //   return { cartCount, updateCardCount }
  // },
};
</script>

<style>
.card {
  /* margin-top: 50px; */
  /* height: 300px; */
  width: 80%;
  margin: 3%;
  padding: 10px;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 0 5px gray;

  /* h5.price {
    color: gray;
    font-weight: bold;
  }

  p.description {
    font-size: 0.85rem;
  }

  p.text-muted {
    color: gray;
  }

  button.view-product-button {
    padding: 10px;
    background-color: rgb(79, 160, 187);
    border: none;
    color: white;
    font-weight: bold;
    font-size: 1.15rem;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    background-color: teal;
    color: white;
    font-size: 20px;
  } */
}

@media (min-width: 500px) {
  .card {
    width: 350px;
    margin: 10px;
  }
}
</style>
