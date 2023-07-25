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
    <AppModal @close="$emit('close')" :width="'w-[500px] h-[450px]'">
      <template v-slot:header>
        <div>
          <h2 class="text-3xl font-bold text-center mt-10">Welcome back username</h2>
        </div>
      </template>
      <template v-slot:body>
       <div class=" max-w-[400px]">
        <div class="mt-5 text-left">
          <label class="text-black text-left font-bold text-lg block">Username</label>
          <input type="text" class="text-left text-black rounded-lg border border-cyan-800 border-3 py-2 mt-1 w-[400px] " />
        </div>
        <div class="mt-5 text-left ">
          <label class="text-black text-left font-bold text-lg block">Password</label>
          <input type="password" class="text-left text-black rounded-lg border border-cyan-800 border-3 py-2 mt-1 w-[400px] " />
        </div>
       </div>
      </template>
      <template v-slot:footer>
        <div class="mt-5">
        <AppButton
          :rounded="true"
          :text="'Cancel'"
          @click="$emit('close')"
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
