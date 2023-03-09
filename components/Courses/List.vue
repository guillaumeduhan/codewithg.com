<script setup>
const client = useSupabaseClient();

const state = reactive({
  loading: false,
  disabled: false,
  error: undefined,
  courses: [],
});

const fetchCourses = async () => {
  try {
    state.loading = true;
    let { data: courses, error } = await client
      .from("courses")
      .select("*")
      .eq('hidden', false)
      .order("released_at", { ascending: true });

    if (courses.length > 0) {
      state.courses = courses;
    }
  } catch (error) {
    console.log(error);
  } finally {
    state.loading = false;
  }
};

// fetchCourses()
</script>

<template>
  <div class="container CoursesList">
    <div class="grid gap-8 lg:grid-cols-3" v-if="state.loading">
      <LoadingArticle v-for="(items, index) in 9" :key="index" />
    </div>
    <div v-else>
      <div class="grid gap-8 lg:grid-cols-3">
        <CoursesItem v-for="(course, index) in state.courses" :key="index" :course="course"
          @click="$router.push(`/course/${course.slug}`)" />
      </div>
    </div>
  </div>
</template>

<style lang='scss'></style>