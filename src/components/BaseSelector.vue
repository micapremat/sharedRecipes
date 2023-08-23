<script setup lang="ts">

const props = defineProps<{
    search?: string
    selection?: string
  }>()

</script>

<template>
  <div class="">
    
    <select class=" py-1 px-0 w-full text-sm text-gray-500 border-0 border-b-2 border-gray-200 dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
        <option selected>{{ selection }}</option>
        <option value="NameAZ">Name A-Z</option>
        <option value="NameZA">Name Z-A</option>
        <option value="Date">Date</option>
        <option value="AuthoAZ">Author Name A-Z</option>
        <option value="AuthoZA">Author Name Z-A</option>
    </select>

  </div>
</template>
