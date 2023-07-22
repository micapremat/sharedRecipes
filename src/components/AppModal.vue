<script setup lang="ts">
import { ref } from 'vue'
import AppButton from './AppButton.vue'
const props = withDefaults(
  defineProps<{
    header?: string
    body?: boolean
    isOpen?: boolean
    width?: string
    extras?: boolean
  }>(),
  {
    width: 'w-[900px]',
    extras: false
  }
)
const isOpen = ref(props.isOpen)
</script>

<template>
  <transition name="fade">
    <div>
      <div class="fixed inset-0 z-10 bg-black opacity-70"></div>
      <div
        :class="`max-w-full ${width} max-h-[800px] z-20 overflow-y-auto fixed inset-0 mx-auto my-auto rounded-xl shadow-lg bg-white`"
      >
        <label
          class="btn btn-sm btn-circle absolute right-2 top-2 cursor-pointer z-30 text-black"
          @click.prevent="$emit('close')"
          >✕</label
        >
        <div class="flex w-full h-full">
          <div class="flex flex-[1_1_30%] justify-center align-middle bg-cyan-800 p-5" v-if="extras">
            <slot name="extras"></slot>
          </div>
          <div :class="[extras ? 'flex flex-[1_1_70%]' : '', 'p-3']">
            <div>
            <div class="text-center flex-auto justify-center leading-6 text-black">
              <slot name="header"></slot>
            </div>
            <div class="text-center text-md px-8">
              <slot name="body"></slot>
            </div>
            <div class="text-center text-md px-8">
              <slot name="footer"></slot>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
