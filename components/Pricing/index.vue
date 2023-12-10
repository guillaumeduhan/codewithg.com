<script setup>
const prices = ref([{
  price: 99,
  title: 'Beginner',
  // url: 'https://calendly.com/guillaumeduhan/beginner-session'
}, {
  price: 199,
  title: 'Intermediate',
  // url: 'https://calendly.com/guillaumeduhan/intermediate-session'
}, {
  price: 299,
  title: 'Advanced',
  // url: 'https://calendly.com/guillaumeduhan/advanced-session'
}])
</script>

<template>
  <div class="mb-12">

    <p class="mb-8">Limited to 10 students per year, our sessions, which include private lessons, code and project
      reviews, as well as job search support, typically last for 1 hour every 2 weeks and can range from 6 weeks to 1
      year, depending on your goals.</p>
    <div class="flex items-center justify-start gap-4">
      <div class="flex gap-2">
        <Avatar v-for="item, index in ['B', 'B', 'B', 'B', 'B', 'B', 'I', 'I', 'A']" :key="index" :offline="true"
          :user="{ email: item }" />
        <Avatar :online="true" />
      </div>
      <div>
        <p class="block text-sm">1 room left on 10.</p>
      </div>
    </div>
    <div :class="`grid gap-3 py-8`">
      <PricingItem v-for="item, index in prices" :key="index" :item="item" :isImage="true" :hasPreview="false" />
    </div>
    <div>
      <Button label="Apply">
        <IconsSend />
      </Button>
    </div>
  </div>
</template>