<script setup lang="ts">
const { openUrl, limitString } = useHelpers();
const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  isImage: {
    type: Boolean,
    required: false
  }
});
const {
  title,
  description,
  price,
  path,
  img_url
} = props.item;

const item = props.item
</script>


<template>
  <div :class="`${isImage ? '' : ''} group items-center gap-4 cursor-pointer`">
    <div v-if="img_url" class="mb-4">
      <img :src="img_url" :alt="title" />
    </div>
    <div class="grid gap-4">
      <div :class="`${isImage ? 'grid gap-4' : 'flex gap-4'} items-start justify-between transition cursor-pointer rounded-full`">
        <div class="grid gap-2" @click="openUrl(path)">
          <NuxtLink class="whitespace-nowrap" target="_blank" :to='path'>
            {{ limitString(title, 28) }} →
          </NuxtLink>
          <p class="text-gray-400 text-sm transition group-hover:text-black dark:group-hover:text-slate-200">{{ limitString(description, isImage ? 92 : 120) }}</p>
        </div>
        <p>${{ price }}</p>
      </div>
      <NuxtLink class="text-gray-500 underline underline-offset-4 font-medium text-sm decoration-dashed">Preview</NuxtLink>
    </div>
  </div>
</template>