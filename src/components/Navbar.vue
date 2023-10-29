import { RouterLink } from 'vue-router';
<template>
  <div class="container mx-auto pt-5">
    <div class="flex justify-between">
      <ul class="flex gap-5">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </ul>
      <div class="flex gap-5">
        <button
          class="bg-blue-500 text-white px-10 py-2 hover:bg-blue-400 rounded-md"
        >
          tes
        </button>
        <button class="text-gray-900 px-10 py-2 hover:bg-blue-400 rounded-md">
          tes
        </button>
      </div>
    </div>
  </div>
</template>
