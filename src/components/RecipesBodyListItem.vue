<script setup lang="ts">
import AppStarRating from './AppStarRating.vue';
</script>

<template>
  <div>
    <div>
        <img src="@/assets/imgs/strawberryDaikiri.jpg" class="h-[300px] w-[220px] rounded-lg"/>
    </div>
    <div>
        <h3>Strawberry Daikiri</h3>
        <h4>User: Ramon Perez</h4>
        <AppStarRating :max-points="5" :points="2"/>
    </div>
   
  </div>
</template>
