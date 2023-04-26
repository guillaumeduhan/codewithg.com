<script setup lang="ts">
const route = useRoute();
const client = useSupabaseClient();
const slug = route.params.slug;
const { courses } = useHelpers()

const getCourse = computed(() => {
  return courses.find(x => x.slug === slug)
})

// const state = reactive({
//   loading: false,
//   disabled: false,
//   error: undefined,
//   course: undefined,
// });

// let course = reactive({});

// const fetchCourse = async () => {
//   if (!slug) {
//     return (state.error = "This course does not exist.");
//   }
//   try {
//     state.loading = true;

//     // fetch l'order
//     let { data, error } = await client
//       .from("courses")
//       .select(`
//         *
//       `)
//       .eq("slug", slug)
//       .single();

//     if (course) course = data;
//     if (error) state.error = error;
//   } catch (error) {
//     console.log(error);
//   } finally {
//     state.loading = false;
//   }
// };

// await fetchCourse();

useHead({
  title: getCourse.title || "This course does not exist.",
  description: getCourse.description || "This course does not exist.",
});
</script>

<template>
  <div class="container">
    <header class="container px-2 mx-auto my-6">
      <h1 v-if="getCourse.title" class="mb-2 text-center">
        {{ getCourse.title }}
      </h1>
      <p v-if="getCourse.description" class="mx-auto text-xl text-center description" style="max-width: 800px">
        {{ getCourse.description }}
      </p>
      <div v-if="getCourse.vimeo_url" class="mx-auto mt-6 mb-12 overflow-hidden bg-slate-500/10 rounded-xl"
        style="max-width: 900px; height: 515px; position:relative;"><iframe :src="getCourse.vimeo_url" frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture" allowfullscreen
          style="position:absolute;top:0;left:0;width:100%;height:100%;"
          title="Welcome to codewithguillaume.com"></iframe>
      </div>
    </header>
  </div>
</template>

<style lang="scss" scoped>
.CourseSlug {
  h1 {
    @apply text-4xl mb-4;
  }
}
</style>