<script setup lang="ts">
const route = useRoute();
const client = useSupabaseClient();
const slug = route.params.slug;
const { openUrl, courses } = useHelpers()

const { getOrders } = useStore()

console.log(getOrders.value)

const getCourse = computed(() => {
  return courses.find(x => x.slug === slug)
})

useHead({
  title: getCourse.value?.title
});

const checkUrl = () => {
  if (!getCourse.value) return
  openUrl(getCourse.value.stripe_url)
}
</script>

<template>
  <div class="container course">
    <header v-if="getCourse" class="container px-2 mx-auto my-6">
      <h1 v-if="getCourse.title" class="mb-2 text-center">
        {{ getCourse.title }}
      </h1>
      <p v-if="getCourse.description" class="mx-auto text-xl text-center description" style="max-width: 800px">
        {{ getCourse.description }}
      </p>
      <div v-if="getCourse.level" class="flex items-center justify-center mt-4">
        <div :class="`label label--level`">{{ getCourse.level.toUpperCase() }}</div>
      </div>
    </header>
    <div v-if="getCourse">
      <div v-if="getCourse.trailer_url" class="relative mx-auto mt-6 mb-12 overflow-hidden bg-slate-500/10 rounded-xl"
        style="max-width: 900px; height: 515px; position:relative;">
        <iframe
          src="https://player.vimeo.com/video/821197744?h=0916683e32&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen
          style="position:absolute;top:0;left:0;width:100%;height:100%;"
          title="Introduction to Nuxt 3, Supabase &amp;amp; Stripe course"></iframe>
      </div>
      <div class="flex items-center justify-center">
        <button class="btn btn-primary" @click="checkUrl">
          Buy for ${{ getCourse.price }}
        </button>
      </div>
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