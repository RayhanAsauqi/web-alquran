<script setup lang="ts">
import { defineProps } from "vue";
import { IAlquranData } from "../../type/main";
defineProps<{
  listAlquran: IAlquranData | null;
}>();
</script>

<template>
  <div class="border px-20">
    <div v-for="surat in listAlquran?.data" :key="surat.nomor">
      <div class="flex gap-y-5 gap-x-10 w-full items-center">
        <router-link to="/">
          <h1 class="border bg-green-500 px-2 py-2 w-10 text-center">
            {{ surat.nomor }}
          </h1>
        </router-link>
        <h1>{{ surat.nama }}</h1>
        <div class="grid grid-cols-1 justify-between">
          <h1>{{ surat.namaLatin }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>
