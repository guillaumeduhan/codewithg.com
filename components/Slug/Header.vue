<script setup>
const props = defineProps(["course"])
</script>

<template>
  <header v-if="course" class="mb-4 text-center">
    <h1 v-if="course.title" class="mb-2 text-3xl font-bold" v-html="course.title" />
    <p v-if="course.description" class="text-base text-center mx-auto description" style="max-width: 750px;">
      {{ course.description }}
    </p>
  </header>
</template>