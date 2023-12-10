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
    <NuxtLink class="whitespace-nowrap" target="_blank" :to="url">
      {{ title }} → {{ room }}
    </NuxtLink>
    <p>${{ price }}</p>
  </div>
</template>