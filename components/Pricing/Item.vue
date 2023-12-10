<script setup lang="ts">
const props = defineProps({
  item: {
    type: Object,
    required: true
  },
});
const {
  title,
  price,
  room,
  url
} = props.item;

</script>

<template>
  <div :class="`group items-center gap-4 cursor-pointer flex`">
    <NuxtLink target="_blank" :to="url">
      {{ title }} →
    </NuxtLink>
    <p>${{ price }} <span class="text-xs text-gray-400">per session</span></p>
  </div>
</template>