<script setup lang="ts">
import { ref } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import BaseModal from './BaseModal.vue'
import BaseButton from './BaseButton.vue'
import IconEcosystem from './icons/IconEcosystem.vue'
import type { UserRegister } from '@/types/UserRegister'
import { charRegex, emailRegex, charAndNumRegex, passwordRegex } from '@/types/RegexPatterns'
import { register } from './services/Register.service'
import type { AlertType } from '@/types/AlertType'
import BaseAlert from './BaseAlert.vue'

const props = defineProps<{
  title?: string
}>()

const emit = defineEmits(['close'])

const user = ref<UserRegister>({
  name: '',
  surname: '',
  email: '',
  username: '',
  password: '',
});
const repeatPassword = ref();
const errorMsgs = ref<Array<object>>();
const openAlert = ref(false);
const alertType = ref<AlertType>('success')


const findValueByKey = (array: Array<object>, key: string) => {
  for (const item of array) {
    if (key in item) {
      return item[key as keyof typeof item];
    }
  }
  return null;
};

const validateFields = () => {
  errorMsgs.value = []
  if (!user.value.name) {
    errorMsgs.value.push(
      {'name': 'Name is mandatory'}
      )
  } else if (!charRegex.test(user.value.name)) {
    errorMsgs.value.push(
      {'name': 'Name is not valid'}
      )
  }
  if(!user.value.surname) {
    errorMsgs.value.push(
      {'surname': 'Surname is mandatory'}
      )
  } else if (!charRegex.test(user.value.surname)) {
    errorMsgs.value.push(
      {'surname': 'Surname is not valid'}
      )
  }
  if (!user.value.email) {
    errorMsgs.value.push(
      {'email': 'Email is mandatory'}
      )
  } else if (!emailRegex.test(user.value.email)) {
    errorMsgs.value.push(
      {'email': 'Email is not valid'}
      )
  }
  if(!user.value.username) {
    errorMsgs.value.push(
      {'username': 'Username is mandatory'}
      )
   } else if (!charAndNumRegex.test(user.value.username)) {
    errorMsgs.value.push(
      {'username': 'Username is not valid'}
      )
  }
  if (!user.value.password) {
    errorMsgs.value.push(
      {'password': 'Password is mandatory'}
      )
  } else if (!passwordRegex.test(user.value.password)) {
    errorMsgs.value.push(
      {'password': 'Password is not valid'}
      )
  }
  if(!repeatPassword.value){
    errorMsgs.value.push(
      {'repeatPassword': "Passwords doesn't match"}
      )
  } else if( user.value.password !== repeatPassword.value) {
    errorMsgs.value.push(
      {'repeatPassword': "Passwords doesn't match"}
      )
  }
  return errorMsgs.value.length === 0
}

const createAccount = async () => {
  const valid = validateFields()
  console.log(valid)
  if(valid){
    try {
      const response: Response = await register(user.value, 'auth/register')
      if (response.ok) {
        emit('close')
      } 
    } catch {
        openAlert.value = true
        alertType.value = 'error'
      }
  }
}

</script>

<template>
  <div>
    <BaseModal @close="$emit('close')" :extras="true" :width="'w-[1200px]'">
      <template v-slot:extras>
        <div class="pt-[200px]">
          <div class="m-auto flex justify-center py-6">
            <IconEcosystem />
          </div>
          <h2 class="text-center py-4 font-['Pacifico'] text-3xl">Welcome to</h2>
          <h2 class="text-center font-['Bebas_Neue'] text-5xl pb-6">Shared Recipes</h2>
          <p class="text-center">
            After creating your account, you will be able to create new recipes, share them and save
            other user's recipes as favourites.
          </p>
        </div>
      </template>
      <template v-slot:header>
        <BaseAlert :title="'Something went wrong'" :message="'Please try again later'" :type="alertType" v-if="openAlert"/>
        <div>
          <h2 class="text-3xl font-bold text-left mt-10 ml-3">Create your acount</h2>
        </div>
      </template>
      <template v-slot:body>
       <div class=" w-[600px]">
        <div class="mt-6 text-left w-[600px]">
          <label class="text-black text-left font-bold text-lg block">Name</label>
          <input type="text" class="text-left text-black rounded-lg border border-cyan-800 border-3 py-2 mt-1 w-[600px] "  v-model="user.name"/>
        </div>
        <span class="text-red-500 block absolute" v-if="errorMsgs">{{ findValueByKey(errorMsgs, "name") }}</span>
        <div class="mt-6 text-left w-[600px]">
          <label class="text-black text-left font-bold text-lg block">Surname</label>
          <input type="text" class="text-left text-black rounded-lg border border-cyan-800 border-3 py-2 mt-1 w-[600px] " v-model="user.surname"/>
        </div>
        <span class="text-red-500 block absolute " v-if="errorMsgs">{{ findValueByKey(errorMsgs, "surname") }}</span>
        <div class="mt-6 text-left w-[600px]">
          <label class="text-black text-left font-bold text-lg block">Email</label>
          <input type="text" class="text-left text-black rounded-lg border border-cyan-800 border-3 py-2 mt-1 w-[600px] " v-model="user.email"/>
        </div>
        <span class="text-red-500 block absolute" v-if="errorMsgs">{{ findValueByKey(errorMsgs, "email") }}</span>
        <div class="mt-6 text-left w-[600px]">
          <label class="text-black text-left font-bold text-lg block">Username</label>
          <input type="text" class="text-left text-black rounded-lg border border-cyan-800 border-3 py-2 mt-1 w-[600px] " v-model="user.username" />
        </div>
        <span class="text-red-500 block absolute" v-if="errorMsgs">{{ findValueByKey(errorMsgs, "username") }}</span>
        <div class="mt-6 text-left w-[600px]">
          <label class="text-black text-left font-bold text-lg block">Password</label>
          <input type="password" class="text-left text-black rounded-lg border border-cyan-800 border-3 py-2 mt-1 w-[600px] " v-model="user.password"/>
        </div>
        <span class="text-red-500 block absolute" v-if="errorMsgs">{{ findValueByKey(errorMsgs, "password") }}</span>
        <div class="mt-6 text-left w-[600px]">
          <label class="text-black text-left font-bold text-lg block">Repeat password</label>
          <input type="password" class="text-left text-black rounded-lg border border-cyan-800 border-3 py-2 mt-1 w-[600px] " v-model="repeatPassword"/>
        </div>
        <span class="text-red-500 block absolute" v-if="errorMsgs">{{ findValueByKey(errorMsgs, "repeatPassword") }}</span>
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
          @click="createAccount()"
          class="bg-cyan-800 text-white my-8 py-2 mx-5"
        />
      </div>
      </template>
    </BaseModal>
  </div>
</template>
@/types/UserRegister