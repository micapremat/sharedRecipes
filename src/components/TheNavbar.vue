<script setup lang="ts">
import { ref } from 'vue';
import BaseButton from './BaseButton.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CreateAccount from './CreateAccount.vue';
import Login from './Login.vue';
import { authStore } from '@/stores/auth'

const createAccount = ref(false)
const login = ref(false)

const auth = authStore();

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("loggedUser");
  auth.setLoggedUser()
}
</script>

<template>
  <div>
    <nav class="flex justify-between p-4 bg-transparent text-white">
      <div>
        <EcosystemIcon />
      </div>
      <div>
        <router-link to="/" class="mx-2 hover:bg-transparent">
          <BaseButton :rounded="true" :outline="true" :text="'Home'" />
        </router-link>
        <router-link to="/recipes" class="mx-2 hover:bg-transparent">
          <BaseButton :rounded="true" :outline="true" :text="'Recipies'" />
        </router-link>
        <div class="mx-2 hover:bg-transparent inline-block" v-if="!auth.isLoggedUser">
          <BaseButton :rounded="true" :outline="true" :text="'Create Account'" @click="createAccount = true"/>
          <CreateAccount v-if="createAccount" @close="createAccount = false"/>
        </div>
        <router-link to="/profile" class="mx-2 hover:bg-transparent">
          <BaseButton :rounded="true" :outline="true" :text="'Profile'" />
        </router-link>
        <div class="mx-2 hover:bg-transparent inline-block" v-if="!auth.isLoggedUser">
          <BaseButton :rounded="true" :outline="true" :text="'Login'" @click="login = true"/>
          <Login v-if="login" @close="login = false"/>
        </div>
        <div class="mx-2 hover:bg-transparent inline-block" v-else>
          <BaseButton :rounded="true" :outline="true" :text="'Logout'" @click="logout()"/>
        </div>
      </div>
    </nav>
  </div>
</template>
<style scoped></style>
