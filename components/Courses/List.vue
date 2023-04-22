<script setup>
const { courses } = useHelpers();
</script>

<template>
  <div class="container CoursesList">
    <div class="grid gap-8 lg:grid-cols-3">
      <CoursesItem v-for="(course, index) in courses" :key="index" :course="course"
        @click="$router.push(`/course/${course.slug}`)" />
    </div>
  </div>
</template>

<style lang='scss'></style>