<script setup lang="ts">
import { ref } from 'vue';
import AppButton from './AppButton.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CreateAccount from './CreateAccount.vue';

const createAccount = ref(false)
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
        <div class="mx-2 hover:bg-transparent inline-block">
          <AppButton :rounded="true" :outline="true" :text="'Create Account'" @click="createAccount = true"/>
          <CreateAccount v-if="createAccount" @close="createAccount = false"/>
        </div>
        <router-link to="#/" class="mx-2 hover:bg-transparent">
          <AppButton :rounded="true" :outline="true" :text="'Login'" />
        </router-link>
      </div>
    </nav>
  </div>
</template>
<style scoped></style>
