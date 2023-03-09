<script setup>
const props = defineProps(["item"]);
const item = props.item;
</script>

<template>
  <div class="Questions--Item">
    <header class="flex items-start justify-between mb-1">
      <div>
        <p class="font-bold text-white">{{ item.name }}</p>
        <p v-if="item.company" class="text-sm">{{ item.company }}</p>
      </div>
      <div v-if="item.country">{{ item.country }}</div>
    </header>
    <div class="font-medium">{{ item.description }}</div>
  </div>
</template>

<style lang='scss'></style>