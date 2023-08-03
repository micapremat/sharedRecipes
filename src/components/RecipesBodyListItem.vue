<script setup lang="ts">
import BaseStarRating from './BaseStarRating.vue';
</script>

<template>
  <div>
    <div>
        <img src="@/assets/imgs/strawberryDaikiri.jpg" class="h-[300px] w-[220px] rounded-lg"/>
    </div>
    <div>
        <h3>Strawberry Daikiri</h3>
        <h4>User: Ramon Perez</h4>
        <BaseStarRating :max-points="5" :points="2"/>
    </div>
   
  </div>
</template>
