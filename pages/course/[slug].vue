<script setup>
const route = useRoute();
const slug = route.params.slug;
const client = useSupabaseClient();

const state = reactive({
  loading: false,
  disabled: false,
  error: undefined,
  course: undefined,
});

let course = reactive({});

const fetchCourse = async () => {
  if (!slug) {
    return (state.error = "This course does not exist.");
  }
  try {
    state.loading = true;

    // fetch l'order
    let { data, error } = await client
      .from("courses")
      .select(`
        *
      `)
      .eq("slug", slug)
      .single();

    if (course) course = data;
    if (error) state.error = error;
  } catch (error) {
    console.log(error);
  } finally {
    state.loading = false;
  }
};

await fetchCourse();

useHead({
  title: course?.title || "This course does not exist.",
  description: course?.description || "This course does not exist.",
});
</script>

<template>
  <div class="container" v-if="course">
    <LoadingSlug v-if="state.loading" />
    <div v-else class="mx-auto slug" style="max-width: 900px;">
      <img :src="course.img_url" class="w-full mb-4" />
      <h2 v-if="course.title">{{ course.title }}</h2>
      <p class="mb-4 description" v-if="course.description">
        {{ course.description }}
      </p>
      <div v-if="state.loading">
        <div class="w-full mx-auto mb-4 loading rounded-xl" style="height: 340px" />
        <div class="w-full h-12 mb-4 w-72 loading rounded-xl" />
      </div>
      <Payment v-else :course="course" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.CourseSlug {
  h1 {
    @apply text-4xl mb-4;
  }
}
</style>