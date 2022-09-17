<template>
  <header id="header" class="bg-white">
    <nav class="container mx-auto flex justify-start items-center py-2 px-2">
      <!-- logo and company name -->
      <router-link to="/"><img src="leaf.jpg" class="h-10 w-10 sm:flex-shrink-0" /></router-link>
      <router-link to="/"></router-link>
      <router-link to="/"
        ><h3 class="ml-1" style="font-family: cursive">
          Kai Family Farm
          <h6 class="ml-6" style="font-size: 11px; margin-top: -4px">
            Killer Ass Indo
          </h6>
        </h3></router-link
      >

      <div class="flex flex-grow items-center">
        <!-- Primary Navigation -->
        <ul class="flex">
          <!-- Navigation Links -->
          <li v-if="!userStore.userLoggedIn">
            <a class="pl-7 text-sm" href="#" @click.prevent="toggleAuthModal">
              Login / Register
            </a>
          </li>
          <template v-else>
            <li>
              <router-link class="pl-7 text-sm" :to="{ name: 'home' }">
                Manage</router-link
              >
            </li>
            <li>
              <a class="pl-7 text-sm" href="#" @click.prevent="signOut"
                >Logout</a
              >
            </li>
          </template>
        </ul>
        <div class="flex-1 justify-end flex gap-x-6 items-center">
          <div
            class="relative w-7 h-7 cursor-pointer flex items-center justify-center"
          >
            <i
              class="fas fa-shopping-cart text-gray-400 text-xl"
              @click="toggleCart"
            ></i>
            <span
              v-if="cartQuantity > 0"
              class="text-xs flex items-center justify-center absolute py-2 px-3 w-1 h-1 rounded-full bg-lime-500 text-white -top-2 left-2"
              >{{ cartQuantity }}</span
            >
          </div>
          <img
            src="Kyle.png"
            class="w-12 h-12 rounded-full cursor-pointer border-4 border-transparent hover:border-lime-500"
            alt=""
          />
        </div>
      </div>
    </nav>
    <!-- <app-cart /> -->
  </header>
</template>

<script>
import { mapStores } from "pinia";
import useModalStore from "@/stores/modal";
import useUserStore from "@/stores/user";

export default {
  name: "AppHeader",
  computed: {
    ...mapStores(useModalStore, useUserStore),
  },
  data() {
    return {
      cartQuantity: 1,
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
