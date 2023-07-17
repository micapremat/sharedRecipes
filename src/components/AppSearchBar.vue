<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  search: string
}>()

const toggle = ref(false);
const search = ref(props.search);
const categories = ref(['Beverages', 'Appetizers', 'Soup/Stews', 'Salads', 'Main dishes', 'Sauces', 'Desserts', 'Bread', 'Vegan', 'Gluten-free', 'Others'])

const getRecipes = () => {
  console.log(search.value)
}

const searchByCategory = (category: string) => {
  search.value = category
  getRecipes()
  toggle.value = !toggle.value
}
</script>

<template>
    <div class="flex">
      <button
        @click="toggle = !toggle"
        id="dropdown-button"
        class=" w-[175px] flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
        type="button"
      >
        All categories
        <svg
          class="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      <div
        id="dropdown"
        class="absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        v-if="toggle"
      >
        <ul
          class="py-2 text-sm text-gray-700 dark:text-gray-200 h-[250px] overflow-y-scroll"
          aria-labelledby="dropdown-button"
        >
          <li v-for="category in categories">
            <button
              type="button"
              class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              @click="searchByCategory(category)"
            >
              {{ category }}
            </button>
          </li>
        </ul>
      </div>
      <div class="relative w-full">
        <input
          type="search"
          id="search-dropdown"
          class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
          placeholder="Search your recipe"
          v-model="search"
        />
        <button
        @click.prevent="getRecipes()"
          type="submit"
          class="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-cyan-800 rounded-r-lg border border-cyan-800 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300"
        >
          <svg
            class="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>
      </div>
    </div>
</template>
