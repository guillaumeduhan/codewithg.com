<script setup lang="ts">
definePageMeta({
  layout: 'school'
})
const { translate } = useStore();
const route = useRoute();
const slug = route.params.slug;
const { getOrdersCourses } = useStore();
const { fetchOrders } = useSupabase();
const { openUrl, courses, getPrice } = useHelpers();


let loading = ref(true);

const checkUrl = function () {
  if (!getCourse.value) return;
  openUrl(getCourse.value.stripe_url);
};

const getCourse = computed<any>(() => {
  if (getOrdersCourses.value) {
    const find = getOrdersCourses.value.find((x) => x.slug === slug);
    if (find) {
      return find;
    } else {
      return courses.find((x) => x.slug === slug);
    }
  }
  return courses.find((x) => x.slug === slug);
});

useHead({
  title: getCourse.value?.title
});

onMounted(async () => {
  loading.value = true;
  await fetchOrders();
  loading.value = false;
});
</script>

<template>
  <LoadingSlug v-if="loading" />
  <div v-else class="container grid grid-cols-8 gap-8 my-8 course">
    <div class="col-span-5">
      <div v-if="getCourse.vimeo_url || getCourse.trailer_url"
        class="relative flex items-start justify-start mx-auto w-full h-[492px]">
        <iframe :src="getCourse.vimeo_url ?? getCourse.trailer_url" frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture" allowfullscreen
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
          title="Introduction to Nuxt 3, Supabase &amp;amp; Stripe course"></iframe>
      </div>
      <div v-else>
        <img class="w-full" v-if="getCourse.img" :src="getCourse.img" />
      </div>
      <SlugHeader :course="getCourse" />
    </div>
    <div v-if="!getCourse.vimeo_url" class="col-span-3">
      <div class="border border-slate-500/10 p-4">
        <img class="w-32 mb-4" v-if="getCourse.img" :src="getCourse.img" />
        <div class="border-b pb-2 mb-4">
          <div class="flex items-center justify-between font-bold">
            <p class="font-bold text-sm text-black">{{ getCourse.title }}</p>
            <p>
              {{
                getPrice(getCourse.price, getCourse.lang) || translate("general", "free")
              }}
            </p>
          </div>
          <div class="mb-4 text-sm flex flex-col items-start justify-between font-bold">
            <p>{{ translate('general', 'access') }}</p>
          </div>
        </div>
        <button class="btn btn-primary w-full" @click="checkUrl">
          {{ translate('general', 'buy') }} —
          {{ getPrice(getCourse.price, getCourse.lang) || translate("general", "free") }}
        </button>
      </div>
    </div>
  </div>
</template>
