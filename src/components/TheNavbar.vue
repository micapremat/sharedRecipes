<script setup lang="ts">
import AppButton from './AppButton.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
</script>

<template>
  <div>
    <nav class="flex justify-between p-4 bg-transparent text-white">
      <div>
        <EcosystemIcon />
      </div>
      <div>
        <router-link to="/" class="mx-2 hover:bg-transparent">
          <AppButton :rounded="true" :outline="true" :text="'Home'" />
        </router-link>
        <router-link to="/recipes" class="mx-2 hover:bg-transparent">
          <AppButton :rounded="true" :outline="true" :text="'Recipies'" />
        </router-link>
        <router-link to="#/" class="mx-2 hover:bg-transparent">
          <AppButton :rounded="true" :outline="true" :text="'Create Account'" />
        </router-link>
        <router-link to="#/" class="mx-2 hover:bg-transparent">
          <AppButton :rounded="true" :outline="true" :text="'Login'" />
        </router-link>
      </div>
    </nav>
  </div>
</template>
<style scoped></style>
