<script setup>
import data from "../data.json";

definePageMeta({
  middleware: 'default',
})

useHead({
  title:
    "Codewithguillaume.com | Learn to Code with the Best | Advance Your Career",
  meta: [
    {
      name: "description",
      content:
        "I'm Guillaume Duhan, an accomplished CTO with over 15 years of experience shaping technology in cities like Paris, London, and Berlin, currently leading Allocations.com in Miami; I'm also known for my educational impact through Udemy, academic contributions, and my YouTube channel @codewithguillaume.",
    },
    {
      name: "keywords",
      content:
        "online school for developers, coding, software development, learn to code, coding bootcamp, advance career, developer education",
    },
    { name: "robots", content: "index, follow" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      property: "og:title",
      content:
        "CodewithGuillaume.com | I'm @Codewithguillaume, an accomplished CTO with over 15 years of experience shaping technology in cities like Paris, London, and Berlin.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://codewithguillaume.com/" },
    {
      property: "og:image",
      content: "https://codewithguillaume.com/images/logo.jpg",
    },
    {
      property: "og:description",
      content:
        "I'm Guillaume Duhan, an accomplished CTO with over 15 years of experience shaping technology in cities like Paris, London, and Berlin, currently leading Allocations.com in Miami; I'm also known for my educational impact through Udemy, academic contributions, and my YouTube channel @codewithguillaume.",
    },
    { property: "og:site_name", content: "codewithguillaume.com" },
  ],
});
</script>

<template>
  <div class="mb-0 pb-12 border-b border-dashed border-slate-500">
    <p class="mb-8">I'm Guillaume Duhan, an accomplished CTO with over 15 years of experience shaping technology in cities
      like Paris, London, and Berlin, currently leading Allocations.com in Miami; I'm also known for my educational impact
      through Udemy, academic contributions, and my YouTube channel @codewithguillaume.</p>
    <div class="grid gap-3">
      <NuxtLink to="https://dub.sh/top-10-ctos" target="_blank">Top 10 CTOs to follow in 2024 →</NuxtLink>
      <NuxtLink to="https://tally.so/r/npDeOP" target="_blank">Newsletter →
      </NuxtLink>
      <NuxtLink to="https://dub.sh/AsYiLzg" target="_blank">
        Statistics →
      </NuxtLink>
      <NuxtLink to="https://www.malt.fr/profile/guillaumed" target="_blank">Freelancing →</NuxtLink>
    </div>
  </div>
  <div class="grid">
    <Section title="Coachings">
      <Coachings />
    </Section>
    <Section title="Interviews, podcasts & articles">
      <List :list="data.articles" />
    </Section>
    <Section title="Courses">
      <List :images="true" :list="data.courses" />
    </Section>
    <Section title="Wallpapers">
      <List :images="true" :list="data.wallpapers" />
    </Section>
    <Section title="Snippets">
      <Snippets />
    </Section>
  </div>
</template>