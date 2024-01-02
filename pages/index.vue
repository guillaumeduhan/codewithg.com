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
  <Subheader />
  <Bento />
</template>