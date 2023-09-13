<script setup>
const props = defineProps(["course"])
</script>

<template>
  <header v-if="course" class="my-4">
    <h1 v-if="course.title" class="mb-2 text-3xl" v-html="course.title" />
    <p v-if="course.description" class="text-base text-left description" style="max-width: 750px;">
      {{ course.description }}
    </p>
  </header>
</template>