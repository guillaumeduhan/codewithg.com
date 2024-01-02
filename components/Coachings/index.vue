<script setup>
const prices = ref([{
  price: 99,
  title: 'Beginner',
  // url: 'https://calendly.com/guillaumeduhan/beginner-session'
  url: "https://tally.so/r/mJOvjr"
}, {
  price: 199,
  title: 'Intermediate',
  // url: 'https://calendly.com/guillaumeduhan/intermediate-session'
  url: "https://tally.so/r/mJOvjr"
}, {
  price: 299,
  title: 'Advanced',
  // url: 'https://calendly.com/guillaumeduhan/advanced-session'
  url: "https://tally.so/r/mJOvjr"
}])
</script>

<template>
  <div class="grid gap-4">
    <p>Every year, I support a maximum of 10 students in their careers through private lessons, code reviews, and job search assistance.</p>
    <!-- <div :class="`flex items-start justify-between gap-3`">
      <CoachingsItem v-for="item, index in prices" :key="index" :item="item" :isImage="true" :hasPreview="false" />
    </div> -->
  </div>
</template>