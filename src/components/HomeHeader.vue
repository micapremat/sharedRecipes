<script setup lang="ts">
import TheNavbar from './TheNavbar.vue';
</script>

<template>
  <div class="home h-[650px]">
    <TheNavbar />
    <div class="text-center my-28">
      <h3 class="text-white font-['Pacifico'] text-6xl my-7"> Welcome to</h3>
      <h1 class="text-white font-['Bebas_Neue'] text-8xl"> <span class="text-blue-200">SHARED</span> RECIPIES</h1>
      <p class="sm:max-w-2xl m-auto text-white my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet posuere sem. Aenean id leo lorem. Suspendisse in nibh nec velit molestie mollis non et dolor. Suspendisse vitae pretium.</p>
    </div>
  </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Pacifico&display=swap');

.home {
  background: linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .2)), url('../assets/imgs/macarons.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
