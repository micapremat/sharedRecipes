<script setup lang="ts">
import { onMounted } from "vue";
import { authStore } from '@/stores/auth'
const auth = authStore();

onMounted(() => {
  auth.setLoggedUser()
 })
</script>

<template>
  <main>
    <router-view/>
  </main>
</template>

<style scoped>
</style>
