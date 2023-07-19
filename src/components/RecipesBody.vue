<script setup lang="ts">
import { ref } from 'vue';
import RecipesBodyList from './RecipesBodyList.vue';
import { categories } from '@/const/categories'

const allCategories = ref(categories)

</script>

<template>
  <div>
    <RecipesBodyList :title="'Categories'" :list="allCategories"/>
    <div class="grid grid-cols-3 gap-4 m-auto px-36">
    </div>
    
  </div>
</template>