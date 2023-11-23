<script setup>
const props = defineProps(["hideText"])
</script>

<template>
  <div class="flex items-center cursor-pointer" @click="$router.push('/')">
    <div class="mr-3 overflow-hidden rounded-full">
      <img src="/logo.jpg" :class="`${props.hideText ? 'w-24' : 'w-8'}`" />
    </div>
    <span v-if="!props.hideText" class="hidden md:flex font-bold">Codewithguillaume.com</span>
  </div>
</template>

<style lang='scss'></style>