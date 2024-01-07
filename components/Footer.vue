<script setup>
const loading = ref(false)

const topVideos = [
  {
    title: 'Learn Nuxt 3',
    url: 'https://www.youtube.com/watch?v=ww94Jvi8JJo'
  },
  {
    title: 'Full-Stack Web App with Next.js 13',
    url: 'https://www.youtube.com/watch?v=kDGovtwtcyU'
  },
  {
    title: 'Learn Next.js 14',
    url: 'https://www.youtube.com/watch?v=a_qbqpDifXM'
  },
  {
    title: 'Learn Supabase',
    url: 'https://www.youtube.com/watch?v=8DTOTT7q0XA'
  }
]
</script>

<template>
    <div class="mt-12 pt-16 mb-16 border-t border-dashed border-slate-500">
    <div class="grid gap-4 mb-8">
      <p class="text-[24px] leading-[42px] lg:text-[48px] lg:leading-[64px]">The best solution is always the simplest and quickest to implement.</p>
      <p class="text-neutral-500">Codewithguillaume</p>
    </div>
    <div class="grid lg:grid-cols-4 gap-3">
      <NuxtLink v-for="el, index in topVideos" :key="index" :to="el.url" target="_blank">{{el.title}} →</NuxtLink>
    </div>
  </div>
</template>