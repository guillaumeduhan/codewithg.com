<script setup>
const props = defineProps(["course"])
</script>

<template>
  <header v-if="course" class="container px-2 mx-auto my-6">
    <h1 v-if="course.title" class="mb-2 text-4xl text-center" v-html="course.title" />
    <p v-if="course.description" class="mx-auto text-base text-center description" style="max-width: 800px">
      {{ course.description }}
    </p>
  </header>
</template>