<script setup>
const dark = ref(false);

const toggle = () => {
  dark.value = !dark.value
  const root = window.document.body;
  dark.value === true ? root.classList.add('dark') : root.classList.remove('dark')
}
</script>

<template>
  <div @click="toggle" class="fixed top-2 right-2">
    <div class="cursor-pointer">
      <IconsSun v-if="dark" />
      <IconsMoon v-else />
    </div>
  </div>
</template>