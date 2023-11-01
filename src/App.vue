<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Home from "./pages/Home.vue";
import { useListAlquran } from "./store/listAlquran";
import { onMounted } from "vue";

onMounted(() => {
  listAlquran.fetchListAlquran();
});

const listAlquran = useListAlquran();
</script>

<template>
  <div>
    <!-- Navbar -->
    <Navbar :list-alquran="listAlquran" />
    <Home />
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
