<script setup>
useHead({
  title:
    "Codewithguillaume.com | An online School for Developers | Learn to Code with the Best | Advance Your Career",
  meta: [
    {
      name: "description",
      content:
        "Our online school for developers offers a comprehensive curriculum that will help you advance your career in the field of coding and software development. With expert instruction, hands-on projects, and flexible learning options, we make it easy for you to learn and grow.",
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
        "Online School for Developers | Learn to Code with the Best | Advance Your Career",
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
        "Our online school for developers offers a comprehensive curriculum that will help you advance your career in the field of coding and software development. With expert instruction, hands-on projects, and flexible learning options, we make it easy for you to learn and grow.",
    },
    { property: "og:site_name", content: "codewithguillaume.com" },
  ],
});
</script>

<template>
  <div class="relative container">
    <Header />
    <div class="mb-12">
      <p class="mb-4">I'm Guillaume Duhan, an accomplished CTO with over 15 years of experience shaping technology in cities like Paris, London, and Berlin, currently leading Allocations.com in Miami; I'm also known for my educational impact through Udemy, academic contributions, and my YouTube channel "@codewithguillaume".</p>
      <div class="grid gap-3">
        <NuxtLink to="https://tally.so/r/npDeOP" target="_blank">Newsletter: Top 5 articles, links, videos of the week every Sunday →</NuxtLink>
        <NuxtLink to="https://dub.sh/top-10-ctos" target="_blank">Article on Business Times: Top 10 CTOs to follow in 2024 →</NuxtLink>
        <NuxtLink to="https://www.malt.fr/profile/guillaumed" target="_blank">Freelancing: hire me →</NuxtLink>
      </div>
    </div>
    <h2>Private courses</h2>
    <Courses />
    <h2>Templates</h2>
    <h2>Wallpapers</h2>
    <h2>Videos</h2>
    <h2>Articles</h2>
    <h2>Posts</h2>
  </div>
</template>