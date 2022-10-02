<template>
  <!-- <header
    class="fixed flex justify-between items-center px-4 md:px-12 h-14 w-full bg-black"
  >
    <a href="">
      <img src="leafgreen3.png" alt="Leaf" class="h-10" />
    </a>
    <nav>
      <i class="fas fa-bars h-8 w-8 text-lime-500 md:hidden"></i>
      <ul
        class="text-lime-500 fixed left-0 right-0 space-y-4 p-4 min-h-screen transform translate-x-full md:relative md:flex md:min-h-0 md:space-y-0 md:space-x-6 md:p-0 md:translate-x-0"
      >
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  </header> -->
  <header id="header" class="bg-black text-lime-600">
    <nav class="p-2 flex justify-between items-center shadow sticky top-0">
      <div class="z-[99]">
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
      </div>

      <ul
        class="md:flex md:items-center md:z-auto md:static absolute bg-black w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500"
        :class="{
          'opacity-100 top-[50px] transition-all ease-in duration-300':
            isDropped,
        }"
      >
        <li class="mx-4 my-6 md:my-0">
          <a href="#" class="hover:text-lime-300 duration-500">LOGIN</a>
        </li>
        <li class="mx-4 my-6 md:my-0">
          <a href="#" class="hover:text-lime-300 duration-500">ACCOUNT</a>
        </li>
      </ul>
      <div class="flex">
        <i
          class="pr-2 fas fa-solid md:hidden"
          :class="{
            'fa-bars': !isDropped,
            'fa-times': isDropped,
          }"
          @click="toggleBurger"
        ></i>
        <span class="mr-4 flex relative cursor-pointer right-0">
          <i class="fas fa-shopping-cart" @click="toggleCart"></i>
          <span
            v-if="storeCart.totalQuantity() > 0"
            class="text-xs flex items-center justify-center absolute py-2 px-3 w-1 h-1 rounded-full bg-lime-500 text-white -top-2 left-2"
            >{{ storeCart.totalQuantity() }}</span
          >
        </span>
      </div>
    </nav>
    <Cart />
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
      isDropped: false,
    };
  },
  methods: {
    toggleBurger() {
      this.isDropped = !this.isDropped;
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
