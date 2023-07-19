<script setup lang="ts">
import HomeBodySectionLeft from './HomeBodySectionLeft.vue'
import HomeBodySectionRight from './HomeBodySectionRight.vue'
import HomeBodyCarousel from './HomeBodyCarousel.vue';
</script>

<template>
  <div>
    <div>
      <HomeBodyCarousel />
    </div>
    <h2 class="font-['Bebas_Neue'] text-8xl text-center mb-10">Top 10</h2>
    <div v-for="num in 10">
      <div class="grid grid-cols-3 gap-4 m-auto px-36">
        <HomeBodySectionRight  v-if="num % 2 === 0" />
        <HomeBodySectionLeft v-else />
      </div>
      
    </div>
  </div>
</template>