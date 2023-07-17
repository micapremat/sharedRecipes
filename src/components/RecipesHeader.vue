<script setup lang="ts">
import TheNavbar from './TheNavbar.vue'
import AppSearchBar from './AppSearchBar.vue';
import { ref } from 'vue';

const search = ref('')
</script>

<template>
  <div class="home h-[650px] w-full">
    <TheNavbar />
    <div class="text-center my-28">
      <h1 class="text-white font-['Bebas_Neue'] text-6xl my-7">Are you looking for a recipe?</h1>
      <div class="max-w-2xl m-auto">
        <AppSearchBar :search="search"/>
      </div>
      <p class="text-white mt-2">You can find your recipe by name, author or category</p>
    </div>
  </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Pacifico&display=swap');

.home {
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url('../assets/imgs/recipes.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
