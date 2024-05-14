<script setup>
definePageMeta({
  title: 'CODEWITHG.COM'
})
useHead({
  title:
    "CODEWITHG.COM — Guillaume Duhan, CTO & Youtuber",
  meta: [
    {
      name: "description",
      content:
        "CTO of Allocations.com, a SaaS company in finance based in Miami, I have also a YouTube channel: @codewithguillaume. With 15 years of experience in tech as a freelancer, consultant, and Lead Developer, I have led dozens of engineering teams across Paris, London, and Berlin.Thedevelopercourse is the culmination of my experience, and it is a pleasure to deliver it to you today.",
    },
    {
      name: "keywords",
      content:
        "learn how to code, freecodecamp, coursera, software development, coding bootcamp, advance career, developer education",
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
        "CTO of Allocations.com, a SaaS company in finance based in Miami, I have also a YouTube channel: @codewithguillaume. With 15 years of experience in tech as a freelancer, consultant, and Lead Developer, I have led dozens of engineering teams across Paris, London, and Berlin.Thedevelopercourse is the culmination of my experience, and it is a pleasure to deliver it to you today.",
    },
    { property: "og:site_name", content: "codewithg.com" },
  ],
});
</script>

<template>
  <Courses />
</template>