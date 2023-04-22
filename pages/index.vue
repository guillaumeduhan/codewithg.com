<script setup>
definePageMeta({
  middleware: 'signup'
});

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
  <div class="relative Main">
    <Hero class="mb-24" />
    <CoursesList class="mb-12" />
    <Testimonials />
    <QuestionsFrequently />
  </div>
</template>