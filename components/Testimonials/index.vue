<script setup>
const { openUrl } = useHelpers();
const testimonials = [
  {
    name: "Simon",
    country: "🇺🇸",
    company: "Tech Lead @Google, San Francisco",
    description:
      "Guillaume has demonstrated, through his Youtube channel, that he is an excellent teacher.",
  },
  {
    name: "Nitesh",
    company: "CEO @Wathe, London",
    country: "🇬🇧",
    description:
      "Guillaume is training our tech team on Vue.js. He does a wonderful job.",
  },
  {
    name: "Athanassios",
    country: "🇩🇪",
    company: "CEO @Artemis Synergy, Berlin",
    description:
      "On the technical side of our recruitments, Guillaume is unique.",
  },
  {
    name: "Léonard",
    country: "🇫🇷",
    company: "Indie Developer, Bali",
    description:
      "Thanks to his platform, I was able to launch my SaaS in two weeks.",
  },
  {
    name: "Shiva",
    company: "Developer @Lemontree, Mumbai",
    country: "🇮🇳",
    description:
      "The courses will allow you to raise your developer level but also to learn new things.",
  },
  {
    name: "Roman",
    company: "Developer, Moscow",
    country: "🇷🇺",
    description:
      "He has a natural talent for conveying his knowledge and skills.",
  },
  {
    name: "Olivia",
    company: "UX/UI design, Sydney",
    country: "🇦🇺",
    description:
      "As a complete beginner, I am so grateful to Guillaume for its patience and understanding.",
  },
  {
    name: "Lee",
    company: "Senior Developer, @FitSide, Seoul",
    country: "🇰🇷",
    description:
      "His enthusiasm for web development is contagious and makes the lessons enjoyable.",
  },
  {
    name: "Mohammed",
    company: "Developer, Casablanca",
    country: "🇲🇦",
    description:
      "I would highly recommend the instructor to anyone looking to learn web development.",
  },
  {
    name: "Jean",
    company: "Developer, @Doctolib, Paris",
    country: "🇫🇷",
    description:
      "I have grown so much as a developer and I attribute it to the instructor's teachings.",
  },
  {
    name: "Ava",
    country: "🇺🇸",
    company: "Freelancer, New York City",
    description: "Now I feel confident in web development.",
  },
  {
    name: "Santiago",
    country: "🇲🇽",
    company: "Lead Dev, @Combo, Mexico City",
    description:
      "I appreciate its personalized approach to teaching, it has made a big difference.",
  },
];
</script>

<template>
  <div class="my-8 Testimonials lg:my-32">
    <h2 class="text-center">
      Testimonials</h2>
    <div class="container grid w-full gap-4 my-8 overflow-hidden lg:grid-cols-4">
      <TestimonialsItem v-for="(item, index) in testimonials.slice(0, 8)" :key="index" :item="item" />
    </div>
    <div class="flex items-center justify-center">
      <button class="btn btn-primary" @click="openUrl('https://tally.so/r/waOVxy')">
        Add your testimonial
      </button>
    </div>
  </div>
</template>


<style lang='scss'></style>