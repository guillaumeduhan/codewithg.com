<script setup>
const props = defineProps(["item"]);
const item = props.item;
</script>

<template>
  <div class="Testimonials--Item">
    <header class="flex items-start justify-between mb-3">
      <div>
        <p class="font-bold text-sm text-white">{{ item.name }}</p>
        <p v-if="item.company" class="text-xs">{{ item.company }}</p>
      </div>
      <div v-if="item.country" class="text-2xl">{{ item.country }}</div>
    </header>
    <div class="text-xs font-medium" style="line-height: 1.43;">{{ item.description }}</div>
  </div>
</template>

<style lang='scss'></style>