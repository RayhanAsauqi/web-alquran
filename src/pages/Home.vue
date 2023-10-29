<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
// import Content from "../components/Content.vue";
import ListAlquraan from "../components/ListAlquran.vue";
import { IAlquranData } from "../../type/main";
import axios from "axios";
import { onMounted, ref } from "vue";

const dataAlquran = ref<IAlquranData | null>(null);

async function fetchListAlquran() {
  try {
    const response = await axios.get("https://equran.id/api/v2/surat");
    dataAlquran.value = response.data;
    console.log(dataAlquran.value?.data);
    return response;
  } catch (error) {
    console.error(error);
  }
}

onMounted(() => {
  fetchListAlquran();
});
</script>

<template>
  <!-- navbar -->
  <Navbar />

  <!-- content -->=
  <ListAlquraan :list-alquran="dataAlquran" />
  <!-- <Content v-for="surat in dataAlquran" :key="surat" /> -->
</template>
