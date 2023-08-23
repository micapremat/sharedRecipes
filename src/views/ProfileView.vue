<script setup lang="ts">
import RecipesHeader from "@/components/RecipesHeader.vue"
import TheNavbar from '@/components/TheNavbar.vue'
import RecipesBodyListItem from "@/components/RecipesBodyListItem.vue";
import BaseSearchBar from '@/components/BaseSearchBar.vue';
import { ref } from "vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseSelector from "@/components/BaseSelector.vue";

const search = ref('')
const selection = ref('Order by')

</script>

<template>
  <div>
    <div class="bg-slate-900">
        <TheNavbar />
    </div>
    <div class="p-10 flex justify-between">
        <div class="max-w-2xl w-72 mt-1">
            <BaseButton :text="'Create new recipe'" :outline="true" :rounded="true" class="text-slate-900 bg-slate-100 outline-2 font-light"/>
        </div>
        <div class="max-w-2xl w-72">
            <BaseSearchBar :search="search"/>
        </div>
    </div>
    <div class="w-40 float-right mx-5">
        <BaseSelector :selection="selection"/>
    </div>
    <div class=" w-full grid grid-cols-7 auto-cols-max m-auto" >
        <div v-for="item in 10" class="px-4 my-8">
            <RecipesBodyListItem />
        </div>
    </div>
  </div>
</template>

