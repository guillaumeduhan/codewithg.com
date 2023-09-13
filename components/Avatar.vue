<script setup>
const props = defineProps(["email"])
const email = props.email
</script>

<template>
  <div
    class="flex text-black font-bold text-xl items-center justify-center mx-auto uppercase avatar--normal bg-primary-500">
    <span v-if="email">{{ email[0] }}</span>
  </div>
</template>