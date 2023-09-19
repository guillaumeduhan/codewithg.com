<script setup>
const { courses: localCourses } = useHelpers();

const getCourses = computed(() => {
  return localCourses.filter((x) => x.lang === 'fr').reverse();
});
</script>

<template>
  <div class="container CoursesList-fr">
    <div class="grid gap-8 lg:grid-cols-4">
      <CoursesItem v-for="(course, index) in getCourses" :key="index" :course="course" locale="fr" />
    </div>
  </div>
</template>
