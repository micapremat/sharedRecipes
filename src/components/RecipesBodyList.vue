<script setup lang="ts">
import type { Category } from '@/types/Category';
import BaseButton from './BaseButton.vue'
import RecipesBodyListItem from './RecipesBodyListItem.vue';
import { ref } from 'vue'

const props = defineProps<{
  title: string;
  list: Category[];
}>()

const list = ref(props.list)
</script>

<template>
  <div>
    <div class="text-center">
      <h2 class="mb-4 font-['Bebas_Neue'] text-4xl">{{ title }}</h2>
      <div v-for="item in list" class="inline-block">
        <BaseButton :rounded="true" :text="item.name" class="mx-2 text-white" :class="[item.selected ? 'bg-cyan-600' : 'bg-cyan-800']" @click="item.selected = !item.selected"/>
      </div>
    </div>
    <div class="grid grid-cols-7 auto-cols-max m-auto" >
        <div v-for="item in 10" class="px-4 my-8">
            <RecipesBodyListItem />
        </div>
    </div>
  </div>
</template>
