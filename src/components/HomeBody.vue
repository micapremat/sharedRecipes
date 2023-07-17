<script setup lang="ts">
import HomeBodySectionLeft from './HomeBodySectionLeft.vue'
import HomeBodySectionRight from './HomeBodySectionRight.vue'
</script>

<template>
  <div v-for="num in 10">
    <div class="grid grid-cols-3 gap-4 m-auto px-36">
      <HomeBodySectionLeft v-if="num % 2 === 0" />
      <HomeBodySectionRight v-else />
    </div>
    
  </div>
</template>