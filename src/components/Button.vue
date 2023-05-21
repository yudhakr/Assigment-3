<template>
  <button
    :class="`btn ${color} py-1 px-2 btn-sm shadow-sm`"
    @click="$emit('functionClick')"
    :type="type"
  >
    {{ content }}
  </button>
</template>

<script setup>
defineProps({
  content: {
    type: String,
  },
  color: {
    type: String,
  },
  type: {
    type: String,
    default: 'button',
  },
})

defineEmits(['functionClick'])
</script>

<style scoped>
.btn {
  border-radius: 3px !important;
}
</style>