<script setup lang="ts">
const { openUrl } = useHelpers();
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
});
const {
  title,
  description,
  price,
  path
} = props.item;



</script>


<template>
  <div>
    <div class="flex items-start justify-between transition cursor-pointer rounded-full">
      <div class="group grid gap-2" @click="openUrl(path)">
        <NuxtLink class="" target="_blank" :to='path'>{{ title }} →</NuxtLink>
        <p class="text-gray-400 transition group-hover:text-black">{{ description }}</p>
      </div>
      <p>${{ price }}</p>
    </div>
    <NuxtLink class="text-gray-500 underline underline-offset-4 font-medium text-sm decoration-dashed">Preview</NuxtLink>
  </div>
</template>