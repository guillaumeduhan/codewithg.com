<script setup>
const props = defineProps(["hideText"])
</script>

<template>
  <div class="flex items-center cursor-pointer" @click="$router.push('/')">
    <div class="mr-3 overflow-hidden rounded-full">
      <img src="/logo.jpg" :class="`${props.hideText ? 'w-24' : 'w-8'}`" />
    </div>
    <span v-if="!props.hideText" class="font-bold">codewithguillaume.com</span>
  </div>
</template>

<style lang='scss'></style>