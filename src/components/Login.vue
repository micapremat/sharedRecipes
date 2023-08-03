<script setup lang="ts">
import { onMounted, ref } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import BaseModal from './BaseModal.vue'
import BaseButton from './BaseButton.vue'
import IconEcosystem from './icons/IconEcosystem.vue'
import type { UserLogin } from '@/types/UserLogin'
import BaseAlert from './BaseAlert.vue'
import type { AlertType } from '@/types/AlertType'
import { login } from './services/Login.service'

const props = defineProps<{
  title?: string
}>()

const emit = defineEmits(['close'])

const openAlert = ref(false)
const alertType = ref<AlertType>('success')

const user = ref<UserLogin>({
  username: '',
  password: ''
});

const loginUser = (async () => {
  try {
    const response: Response = await login(user.value, 'auth/login')
    if(response.ok) {
        emit('close')
    }
  } catch (error) {
    console.log(error)
    openAlert.value = true
    alertType.value = 'error'
  }
})
</script>

<template>
  <div>
    <BaseModal @close="$emit('close')" :width="'w-[500px] h-[450px]'">
      <template v-slot:header>
        <BaseAlert :title="'User not found'" :message="'Try again'" :type="alertType" v-if="openAlert"/>
        <div>
          <h2 class="text-3xl font-bold text-center mt-10">Welcome back username</h2>
        </div>
      </template>
      <template v-slot:body>
       <div class=" max-w-[400px]">
        <div class="mt-5 text-left">
          <label class="text-black text-left font-bold text-lg block">Username</label>
          <input type="text" class="text-left text-black rounded-lg border border-cyan-800 border-3 py-2 mt-1 w-[400px] " v-model="user.username"/>
        </div>
        <div class="mt-5 text-left ">
          <label class="text-black text-left font-bold text-lg block">Password</label>
          <input type="password" class="text-left text-black rounded-lg border border-cyan-800 border-3 py-2 mt-1 w-[400px] "  v-model="user.password"/>
        </div>
       </div>
      </template>
      <template v-slot:footer>
        <div class="mt-5">
        <BaseButton
          :rounded="true"
          :text="'Cancel'"
          @click="$emit('close')"
          class="bg-cyan-800 text-white my-8 py-2 mx-5"
        />
        <BaseButton
          :rounded="true"
          :text="'Create account'"
          @click="loginUser()"
          class="bg-cyan-800 text-white my-8 py-2 mx-5"
        />
      </div>
      </template>
    </BaseModal>
  </div>
</template>
