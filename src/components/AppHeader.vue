<template>
  <header
    class="fixed flex justify-between items-center px-4 md:px-12 h-14 w-full bg-black text-lime-600"
  >
    <div>
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
    <nav class="flex justify-between items-center shadow">
      <ul
        class="fixed left-0 top-11 md:flex bg-black w-full pl-7 transform transition duration-300 translate-x-full md:relative md:translate-x-0 md:w-auto md:py-0 md:pl-0 md:opacity-100 md:top-0"
        :class="{ 'translate-x-full': !navOpen, 'translate-x-0': navOpen }"
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
            'fa-bars': !navOpen,
            'fa-times': navOpen,
          }"
          @click="navOpen = !navOpen"
        ></i>
        <span
          class="mr-4 flex relative right-0 cursor-pointer"
          @click="storeCart.toggleCart()"
        >
          <i class="fas fa-shopping-cart"></i>
          <span
            v-if="storeCart.totalQuantity() > 0"
            class="text-xs flex items-center justify-center absolute py-2 px-3 w-1 h-1 rounded-full bg-lime-500 text-white -top-2 left-2"
            >{{ storeCart.totalQuantity() }}</span
          >
        </span>
      </div>
    </nav>
    <Cart v-if="storeCart.cart.cartOpen" />
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
      navOpen: false,
      cartOpen: false,
    };
  },
  methods: {
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
