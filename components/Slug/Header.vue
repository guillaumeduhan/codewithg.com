<script setup>
const props = defineProps(["course"])
</script>

<template>
  <header v-if="course" class="container px-2 mx-auto my-6">
    <h1 v-if="course.title" class="mb-2 text-center">
      {{ course.title }}
    </h1>
    <p v-if="course.description" class="mx-auto text-xl text-center description" style="max-width: 800px">
      {{ course.description }}
    </p>
    <div v-if="course.level" class="flex items-center justify-center mt-4">
      <div :class="`label label--level`">{{ course.level.toUpperCase() }}</div>
    </div>
  </header>
</template>