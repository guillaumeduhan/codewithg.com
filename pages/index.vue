<script setup>
import data from "../data.json";

definePageMeta({
  middleware: 'default',
})

useHead({
  title:
    "Codewithg.com | CTO & Youtuber",
  meta: [
    {
      name: "description",
      content:
        "I'm Guillaume Duhan, an accomplished CTO with over 15 years of experience shaping technology in cities like Paris, London, and Berlin, currently leading Allocations.com in Miami; I'm also known for my educational impact through Udemy, academic contributions, and my YouTube channel @codewithg.",
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
        "Codewithg.com | CTO & Youtuber",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://codewithg.com/" },
    {
      property: "og:image",
      content: "https://codewithg.com/images/logo.jpg",
    },
    {
      property: "og:description",
      content:
        "I'm Guillaume Duhan, an accomplished CTO with over 15 years of experience shaping technology in cities like Paris, London, and Berlin, currently leading Allocations.com in Miami; I'm also known for my educational impact through Udemy, academic contributions, and my YouTube channel @codewithguillaume.",
    },
    { property: "og:site_name", content: "codewithg.com" },
  ],
});
</script>

<template>
  <Subheader />
  <Bento />
</template>