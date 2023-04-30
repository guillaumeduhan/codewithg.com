<script setup>
definePageMeta({
  middleware: "default",
  layout: "school",
});

const { getOrders } = useStore();
</script>

<template>
  <div class="container my-6 Community">
    <header class="mb-8 text-center">
      <h2>Courses</h2>
      <p class="text-center">Your courses list.</p>
    </header>
    <div>
      <div v-if="getOrders.length > 0">
        <CoursesList class="my-8" :orders="getOrders" />
      </div>
      <div v-else class="text-center user-card">You have no course yet.</div>
      <!-- <div class="my-12 suggestions">
      <h3>You may be interested by...</h3>
      <CoursesList class="my-8" />
    </div> -->
    </div>
  </div>
</template>

<style lang="scss"></style>
