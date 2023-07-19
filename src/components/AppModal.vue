<script setup lang="ts">
import { ref } from 'vue';
import AppButton from './AppButton.vue';

const props = withDefaults(
  defineProps<{
    header?: string
    body?: boolean
    isOpen?: boolean
  }>(),
  {
  }
)
const isOpen = ref(props.isOpen)
</script>

<template>
  <transition name="fade">
    <div>
        <div class="fixed inset-0 z-0 bg-black opacity-70"></div>
        <div class="max-w-3xl max-h-[800px] overflow-y-auto p-3 fixed inset-0 mx-auto my-auto rounded-xl shadow-lg bg-white">
          <label
          class="btn btn-sm btn-circle absolute right-2 top-2 cursor-pointer"
          @click="$emit('close')"
          >✕</label
        >
            <div>
                <div class="text-center p-3 - flex-auto justify-center leading-6">
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
  </transition>
</template>
