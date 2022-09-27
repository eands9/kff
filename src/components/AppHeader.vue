<template>
  <header id="header" class="bg-black text-lime-600">
    <nav class="p-2 shadow md:flex md:items-center md:justify-between">
      <div class="flex justify-between items-center">
        <span class="font-[Cursive] cursor-pointer flex">
          <img class="h-10 inline" src="leafgreen3.png" />

          <router-link to="/"
            ><span class="hover:text-lime-300">
              Kai Family Farm
              <h6 class="ml-6" style="font-size: 11px; margin-top: -4px">
                Killer Ass Indo
              </h6>
            </span></router-link
          >
        </span>
        <i class="fas fa-short fa-solid fa-bars md:hidden"></i>
        <span class="mr-4 flex relative cursor-pointer">
          <i class="fas fa-shopping-cart" @click="toggleCart"></i>
          <span
            v-if="storeCart.totalQuantity() > 0"
            class="text-xs flex items-center justify-center absolute py-2 px-3 w-1 h-1 rounded-full bg-lime-500 text-white -top-2 left-2"
            >{{ storeCart.totalQuantity() }}</span
          >
        </span>
      </div>

      <ul
        class="md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500"
      >
        <li class="mx-4 my-6 md:my-0">
          <a href="#" class="hover:text-lime-500 duration-500">LOGIN</a>
        </li>
        <li class="mx-4 my-6 md:my-0">
          <a href="#" class="hover:text-lime-500 duration-500">ACCOUNT</a>
        </li>
      </ul>
      <!-- Cart -->
    </nav>
    <!-- <Cart /> -->
    <!-- <app-cart /> -->
  </header>
</template>

<script>
import Cart from "@/components/Cart.vue";
import { mapStores } from "pinia";
import useModalStore from "@/stores/modal";
import useUserStore from "@/stores/user";
import { useCartStore } from "@/stores/cart";

export default {
  name: "AppHeader",
  components: { Cart },
  setup() {
    const storeCart = useCartStore();

    return { storeCart };
  },
  computed: {
    ...mapStores(useModalStore, useUserStore),
  },
  data() {
    return {
      cartQuantity: 1,
    };
  },
  methods: {
    Menu(e) {
      let list = document.querySelector("ul");
      e.name === "menu"
        ? ((e.name = "close"),
          list.classList.add("top-[80px]"),
          list.classList.add("opacity-100"))
        : ((e.name = "menu"),
          list.classList.remove("top-[80px]"),
          list.classList.remove("opacity-100"));
    },
    toggleAuthModal() {
      this.modalStore.isOpen = !this.modalStore.isOpen;
      console.log(this.modalStore.isOpen);
    },
    signOut() {
      this.userStore.signOut();

      if (this.$route.meta.requiresAuth) {
        this.$router.push({ name: "home" });
      }
    },
  },
};
</script>
