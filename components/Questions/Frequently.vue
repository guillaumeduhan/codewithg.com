<script setup>
const selected = ref(null);
const getQuestions = computed(() => {
  return [
    {
      question: "Who is Guillaume?",
      answer:
        "Guillaume is a CTO and Senior Front-End Developer who has been working as a Freelancer for the past 10 years. He has worked in over 50 start-ups ranging from 4 to 1000 employees in Paris, London, and Berlin, and has joined over 100 projects. Since 2015, Guillaume has been ranked in the top 1% of freelancers on Malt, which is the first freelancing platform in the EU. Some notable clients he has worked with include Samsung, Sendinblue, Zalando, and Franprix.Additionally, Guillaume has created more than 20 courses on Udemy, with up to 50, 000 students enrolled.He also serves as a jury and teacher for the national developer degree in France(IFOCOP Paris 11), where he lectures on Vue, React, Nuxt, and Next.js.Recently, Guillaume has created his own Youtube channel(codewithguillaume) to share his experience with others.",
    },
    {
      question: "How does it work?",
      answer:
        "Our courses are delivered online through interactive video lectures, live Q&A sessions, and hands-on projects.",
    },
    {
      question: "What is the format?",
      answer:
        "Our courses are videos project-based tutorials. You are able after to ask questions in the Community section and you have an access to talk to Guillaume.",
    },
    {
      question: "What resources?",
      answer: "Students will have access to videos, readings, and lives.",
    },
    {
      question: "What is the price?",
      answer: "Price depends on the length and the content of the course.",
    },
    {
      question: "How long does it take to complete a course?",
      answer:
        "The length of a course depends on the specific topic, but most can be completed within 1 week with a part-time commitment.",
    },
    {
      question: "Are there any prerequisites for enrollment?",
      answer:
        "Some courses may have prerequisites, such as prior experience with a specific programming language, but we offer beginner-friendly courses for those with no prior experience.",
    },
  ];
});
</script>

<template>
  <div class="py-4 mx-auto overflow-auto lg:my-32 QuestionsFrequently">
    <header class="mb-8 text-center">
      <h2 class="text-center">FAQ</h2>
      <p>Everything you need to know about the product and billing.</p>
    </header>
    <div
      class="mb-4 cursor-pointer Testimonials--Item"
      v-for="(item, index) in getQuestions"
      @click="selected = index"
      :key="index"
    >
      <div class="flex items-start justify-start">
        <IconsQuestion
          class="mr-2 text-3xl transition duration-500"
          :class="selected === index ? 'text-primary-500' : 'text-gray-500'"
        />
        <h4>{{ item.question }}</h4>
      </div>
      <div
        v-if="selected === index"
        class="flex items-start justify-start mt-2 ml-2 transition"
      >
        <div class="text-gray-500 transition duration-1000 delay-500">
          <IconsArrowDown />
        </div>
        <p v-html="item.answer" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.QuestionsFrequently {
  max-width: 800px;
}
</style>
