<template>
  <div class="home bg-lime-700">
    <div
      class="product-cards-container flex flex-wrap justify-center text-center"
    >
      <ProductSummaryCard
        v-for="product in items"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import items from "../data/items.js";
import ProductSummaryCard from "../components/products/ProductSummaryCard.vue";
export default {
  name: "Home",
  components: {
    ProductSummaryCard,
  },
  data() {
    return {
      items: items,
    };
  },
};
</script>
