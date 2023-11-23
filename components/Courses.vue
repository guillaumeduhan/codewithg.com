<script setup lang="ts">
const list = [
  {
    title: "Next.js 14 en Français — 2023 ",
    description: "Pour devenir développeur full-stack sur Next.js 14 ou pour lancer son SaaS.",
    path: "https://buy.stripe.com/bIYg1A1U3fjTb7O149",
    trailer_url: "https://player.vimeo.com/video/821197744",
    price: 29
  },
  {
    title: "Build a SaaS with Nuxt, Supabase & Stripe — 2023",
    description: "We'll create a complete app with payment system with Nuxt 3, Supabase, Stripe & ChatGPT.",
    path: "https://buy.stripe.com/bIY3eO6aj6Nn5Nu4gj",
    trailer_url: "https://player.vimeo.com/video/821197744",
    price: 29
  }
]
</script>


<template>
  <div class="grid gap-8 pb-12 border-b border-dashed border-slate-600">
    <CoursesItem v-for="item, index in list" :key="index"
      :item="item"
    />
  </div>
</template>