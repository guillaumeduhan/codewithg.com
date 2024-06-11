<script setup>
import { ref } from 'vue'

const images = ref(["./bmw1.jpeg", "./bmw2.jpeg", "./bmw3.jpeg"]);
const currentIndex = ref(0);

const props = defineProps(["rounded"]);
const { rounded } = props;

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length
};

const prevImage = () => {
  if (currentIndex.value === 0) {
    currentIndex.value = images.value.length - 1
  } else {
    currentIndex.value -= 1
  }
};
</script>

<template>
  <div :class="`w-full h-64 relative overflow-hidden flex items-center justify-center space-x-4 bg-cover bg-center ${rounded ? 'rounded-xl': ''}`" :style="`background-image: url(${images[currentIndex]});`">
    <div @click="prevImage" class="p-4 flex items-center justify-center absolute top-0 left-0 h-full w-20 z-50 group cursor-pointer">
      <div class="h-8 w-8 rounded-full bg-white/50 text-white flex items-center justify-center p-2 group-hover:bg-white/75 group-hover:text-black transition group-hover:scale-105 opacity-0 group-hover:opacity-100">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m13.15 16.15l-3.625-3.625q-.125-.125-.175-.25T9.3 12t.05-.275t.175-.25L13.15 7.85q.075-.075.163-.112T13.5 7.7q.2 0 .35.138T14 8.2v7.6q0 .225-.15.363t-.35.137q-.05 0-.35-.15"/></svg>
      </div>
    </div>
    <div @click="nextImage" class="p-4 flex items-center justify-center absolute top-0 right-0 h-full w-20 z-50 group cursor-pointer">
      <div class="h-8 w-8 rounded-full bg-white/50 text-white flex items-center justify-center p-2 group-hover:bg-white/75 group-hover:text-black transition group-hover:scale-105 opacity-0 group-hover:opacity-100">
        <svg class="rotate-180" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m13.15 16.15l-3.625-3.625q-.125-.125-.175-.25T9.3 12t.05-.275t.175-.25L13.15 7.85q.075-.075.163-.112T13.5 7.7q.2 0 .35.138T14 8.2v7.6q0 .225-.15.363t-.35.137q-.05 0-.35-.15"/></svg>
      </div>
    </div>
    <div class="absolute bottom-4 flex items-center gap-2 mx-auto">
      <div v-for="(item, index) in images" :key="item" :class="`${currentIndex === index ? 'bg-white' : 'bg-white/50'} h-2 w-2 rounded-full cursor-pointer`" @click="currentIndex = index" />
    </div>
  </div>
</template>