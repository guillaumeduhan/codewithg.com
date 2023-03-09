<script setup>
definePageMeta({
  middleware: 'auth'
})
</script>

<template>
  <div class="container my-6 Community">
    <header class="mb-8 text-center">
      <h2>Courses</h2>
      <p class="text-center">Your course list.</p>
    </header>
    <div class="text-center user-card">You have no course yet.</div>
    <div class="my-12 suggestions">
      <h3>You may be interested by...</h3>
      <CoursesList class="my-8" />
    </div>
  </div>
</template>


<style lang='scss'></style>