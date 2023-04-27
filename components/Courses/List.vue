<script setup>

const props = defineProps(["orders"])
const { courses: localCourses } = useHelpers();

const getCourses = computed(() => {
  if (props.orders && props.orders.length > 0) return props.orders.map(({ id, courses, ...rest }) => {
    const localCourse = localCourses.find(x => x.slug === courses.slug)
    return {
      order_id: id,
      vimeo_url: courses.vimeo_url,
      ...rest,
      ...localCourse
    }
  })
  return localCourses
})
</script>

<template>
  <div class="container CoursesList">
    <div class="grid gap-8 lg:grid-cols-3">
      <CoursesItem v-for="(course, index) in getCourses" :key="index" :course="course" :price="!props.orders"
        @click="$router.push(`/course/${course.slug}`)" />
    </div>
  </div>
</template>

<style lang='scss'></style>