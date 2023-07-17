<script setup lang="ts">
withDefaults(
  defineProps<{
    rounded?: boolean
    outline?: boolean
    text: string
  }>(),
  {
    rounded: false,
    outline: false
  }
)
</script>

<template>
  <button
    :class="[
      `px-3 py-1 font-semibold`,
      rounded ? 'rounded-xl' : '',
      outline ? 'outline outline-1 hover:bg-white/30' : '',
    ]"
  >
    {{ text }}
  </button>
</template>
