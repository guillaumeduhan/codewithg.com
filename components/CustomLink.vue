<script setup>
import Folder from '../../public/icons/folder.svg';
const props = defineProps(["url", "title"]);
const { title, url } = props;
</script>

<template>
  <NuxtLink :href="url" class="text-lg" style="color: white;">
    <div class="flex items-start justify-start gap-2 grow">
      <div class="text-emerald-700 text-[24px]">
        <Folder />
      </div>
      <p>{{ title }}</p>
    </div>
  </NuxtLink>
</template>