<script setup lang="ts">
import { ref } from 'vue';
import RecipesBodyList from './RecipesBodyList.vue';

const categories = ref([
    {
        name: 'All categories',
        selected: true
    },
    {
        name: 'Beverages',
        selected: false
    },
    {
        name: 'Appetizers',
        selected: false
    },
    {
        name: 'Soup/Stews',
        selected: false
    },
    {
        name: 'Salads',
        selected: false
    },
    {
        name: 'Main dishes',
        selected: false
    },
    {
        name: 'Sauces',
        selected: false
    },
    {
        name: 'Bread',
        selected: false
    },
    {
        name: 'Vegan',
        selected: false
    },
    {
        name: 'Gluten-free',
        selected: false
    },
    {
        name: 'Others',
        selected: false
    }]
    )
</script>

<template>
  <div>
    <RecipesBodyList :title="'Categories'" :list="categories"/>
    <div class="grid grid-cols-3 gap-4 m-auto px-36">
    </div>
    
  </div>
</template>