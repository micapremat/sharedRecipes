<script setup lang="ts">
import { ref } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import AppStarRating from './AppStarRating.vue'
import AppModal from './AppModal.vue'
import AppButton from './AppButton.vue'
import IconEcosystem from './icons/IconEcosystem.vue'

const props = defineProps<{
  title?: string
}>()

const favorite = ref(true)
const isOpen = ref(false)

const openModal = () => {
  isOpen.value = true
  console.log(isOpen.value)
}
</script>

<template>
  <div>
    <AppModal @close="$emit('close')" :extras="true" :width="'w-[1200px]'">
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
        <div>
          <h2 class="text-3xl font-bold text-left mt-10 ml-3">Create your acount</h2>
        </div>
      </template>
      <template v-slot:body>
       <div class=" w-[600px]">
        <div class="mt-5 text-left w-[600px]">
          <label class="text-black text-left font-bold text-lg block">Name</label>
          <input type="text" class="text-left text-black rounded-lg border border-cyan-800 border-3 py-2 mt-1 w-[600px] " />
        </div>
        <div class="mt-5 text-left w-[600px]">
          <label class="text-black text-left font-bold text-lg block">Surname</label>
          <input type="text" class="text-left text-black rounded-lg border border-cyan-800 border-3 py-2 mt-1 w-[600px] " />
        </div>
        <div class="mt-5 text-left w-[600px]">
          <label class="text-black text-left font-bold text-lg block">Email</label>
          <input type="text" class="text-left text-black rounded-lg border border-cyan-800 border-3 py-2 mt-1 w-[600px] " />
        </div>
        <div class="mt-5 text-left w-[600px]">
          <label class="text-black text-left font-bold text-lg block">Username</label>
          <input type="text" class="text-left text-black rounded-lg border border-cyan-800 border-3 py-2 mt-1 w-[600px] " />
        </div>
        <div class="mt-5 text-left w-[600px]">
          <label class="text-black text-left font-bold text-lg block">Password</label>
          <input type="password" class="text-left text-black rounded-lg border border-cyan-800 border-3 py-2 mt-1 w-[600px] " />
        </div>
        <div class="mt-5 text-left w-[600px]">
          <label class="text-black text-left font-bold text-lg block">Repeat password</label>
          <input type="password" class="text-left text-black rounded-lg border border-cyan-800 border-3 py-2 mt-1 w-[600px] " />
        </div>
       </div>
      </template>
      <template v-slot:footer>
        <div class="mt-5">
        <AppButton
          :rounded="true"
          :text="'Cancel'"
          @click="isOpen = false"
          class="bg-cyan-800 text-white my-8 py-2 mx-5"
        />
        <AppButton
          :rounded="true"
          :text="'Create account'"
          @click="isOpen = false"
          class="bg-cyan-800 text-white my-8 py-2 mx-5"
        />
      </div>
      </template>
    </AppModal>
  </div>
</template>
