<template>
  <app-header />
  <auth />
  <router-view />
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import Auth from "@/components/Auth.vue";
import { mapWritableState } from "pinia";
import useUserStore from "@/stores/user";
import { auth } from "./includes/firebase";

export default {
  name: "App",
  components: { AppHeader, Auth },
  computed: {
    ...mapWritableState(useUserStore, ["userLoggedIn"]),
  },
  created() {
    if (auth.currentUser) {
      this.userLoggedIn = true;
      console.log("Modal: " + this.userLoggedIn)
    }
  },
};
</script>
