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
  title: getCourse.title,
  description: getCourse.description,
});
</script>

<template>
  <div class="container course">
    <header class="container px-2 mx-auto my-6">
      <h1 v-if="getCourse.title" class="mb-2 text-center">
        {{ getCourse.title }}
      </h1>
      <p v-if="getCourse.description" class="mx-auto text-xl text-center description" style="max-width: 800px">
        {{ getCourse.description }}
      </p>
      <div v-if="getCourse.trailer_url" class="relative mx-auto mt-6 mb-12 overflow-hidden bg-slate-500/10 rounded-xl"
        style="max-width: 900px; height: 515px; position:relative;">
        <iframe
          src="https://player.vimeo.com/video/821197744?h=0916683e32&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen
          style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Intro"></iframe>
      </div>
    </header>
    <div class="flex items-center justify-center">
      <button class="btn btn-primary">
        Buy for ${{ getCourse.price }}
      </button>
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