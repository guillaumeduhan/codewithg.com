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
  <div :class="`group grid gap-2 cursor-pointer font-semibold`">
    <NuxtLink target="_blank" :to="url">
      {{ title }}
    </NuxtLink>
    <div class="text-xs">${{ price }} per session</div>
  </div>
</template>