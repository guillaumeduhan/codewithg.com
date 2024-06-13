<script setup>
const loading = ref(false)
const props = defineProps([]);
const {
  images = ["./bmw1.jpeg", "./bmw2.jpeg", "./bmw3.jpeg"],
  name = "My Folder",
  length = 12
} = props;
</script>

<template>
  <div class="text-sm flex items-center justify-center gap-4 relative border dark:border-neutral-600 rounded-xl mx-auto max-w-[500px] w-full shadow overflow-hidden py-3 px-4 cursor-pointer">
    <div class="relative flex w-10 h-10">
      <div v-for='(item, index) in images' :key='index' class="absolute w-8 h-8 -skew-y-12 bg-cover border rounded opacity-75 border-neutral-200 bg-neutral-100" :style="`top: ${index * 5}px; left: ${index * 5}px; background-image: url('${item}')`" />
    </div>
    <div class="grow" style="line-height: 1.32;">
      <p class="font-[600]">{{ name }}</p>
      <p class="text-neutral-400 font-[500]">{{ length }} files</p>
    </div>
  </div>
</template>
