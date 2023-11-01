<script setup lang="ts">
import { defineProps } from "vue";
import { IAlquranSurah } from "../../type/main";
defineProps<{
  listAlquran: IAlquranSurah;
}>();
</script>
<template>
  <div class="container mx-auto pt-5">
    <div class="flex justify-between">
      <ul class="flex gap-5">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </ul>
      <div class="flex gap-5">
        <div class="drawer">
          <input id="my-drawer" type="checkbox" class="drawer-toggle" />
          <div class="drawer-content flex justify-end">
            <!-- button daftar surah-->
            <label for="my-drawer" class="btn btn-primary drawer-button"
              >Daftar Alquran</label
            >
          </div>
          <div class="drawer-side">
            <label
              for="my-drawer"
              aria-label="close sidebar"
              class="drawer-overlay"
            ></label>
         
            <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              <!-- list surah -->
              <li v-for="surat in listAlquran.data" :key="surat.nomor" class="">
                <div class="flex">
                  <p>{{ surat.nomor }}.</p>
                  <router-link to="/detailSurah">
                    <p>{{ surat.namaLatin }}</p>
                  </router-link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
