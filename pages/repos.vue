<script setup>
const loading = ref(false)
const items = ref([
  {
    title: "Supabase course — 2023",
    link: "https://dub.sh/paSQB1N"
  }, {
    title: "Next.js Shadcn Dashboard",
    link: "https://dub.sh/nextjs-shadcnui"
  }, {
    title: "Next.js Supabase",
    link: "https://dub.sh/nextjs14-supabase"
  }, {
    title: "Next.js Newsletter app",
    link: "https://dub.sh/pwD7Fag"
  }, {
    title: "Nuxt 3 Shadcn",
    link: "https://dub.sh/nuxt3-shadcn"
  }, {
    title: "Next.js Resend",
    link: "https://github.com/guillaumeduhan/resend-nextjs14"
  }
])
</script>

<template>
  <main class="grid gap-12">
    <header class="text-center">
      <h1>All repositories</h1>
    </header>
    <div>
      <div class="flex gap-2" v-for='(item, index) in items' :key='index'>
        <span>{{ item.title }}</span>
        <NuxtLink class="text-primary-500" :href="item.link">{{ item.link }}</NuxtLink>
      </div>
    </div>
    <Courses />
  </main>
</template>
