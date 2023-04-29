<script setup>
import dayjs from 'dayjs';

const route = useRoute();
const slug = route.params.slug;
const { getOrdersCourses } = useStore();
const { fetchOrders } = useSupabase();
const { openUrl, courses } = useHelpers()

let loading = ref(false);

const checkUrl = function () {
  if (!getCourse.value) return
  openUrl(getCourse.value.stripe_url)
}
const getCourse = computed(() => {
  if (getOrdersCourses.value) {
    const find = getOrdersCourses.value.find(x => x.slug === slug)
    if (find) return find
  }
  return courses.find(x => x.slug === slug)
})

const getDaysDiff = (dateString) => {
  const today = dayjs();
  const otherDate = dayjs(dateString, 'YYYY-MM-DD');
  console.log(otherDate)
  const diff = otherDate.diff(today, 'day');
  return diff;
}

useHead({
  title: getCourse.value?.title
});

onMounted(async () => {
  loading.value = true;
  await fetchOrders();
  loading.value = false;
})
</script>

<template>
  <LoadingSlug v-if="loading" />
  <div v-else class="container course">
    <SlugHeader v-if="getCourse && !getCourse.vimeo_url" :course="getCourse" />
    <div v-if="getCourse">
      <div class="relative mx-auto mt-6 mb-12 overflow-hidden bg-slate-500/10 rounded-xl"
        :style="`max-width: ${getCourse.vimeo_url ? '1100px' : '900px'}; height: ${getCourse.vimeo_url ? '618px' : '515px'}; position:relative;`">
        <iframe :src="getCourse.vimeo_url ?? getCourse.trailer_url" frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture" allowfullscreen
          style="position:absolute;top:0;left:0;width:100%;height:100%;"
          title="Introduction to Nuxt 3, Supabase &amp;amp; Stripe course"></iframe>
      </div>
      <SlugHeader v-if="getCourse && getCourse.vimeo_url" :course="getCourse" />
      <div class="flex items-center justify-center">
        <button v-if="getCourse.vimeo_url" class="btn btn-primary" @click="openUrl(getCourse.tally_url)">Ask me a
          question</button>
        <div v-else class="text-center">
          <button class="mb-3 btn btn-primary" @click="checkUrl">
            Buy for ${{ getCourse.price }}
          </button>
          <div class="text-xs alert alert-success">You have {{ getDaysDiff(getCourse.promo_until) }} days left to take
            advantage of the price of $69 instead of
            $99.</div>
        </div>
      </div>
    </div>
  </div>
</template>