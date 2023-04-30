<script setup>
definePageMeta({
  middleware: "auth",
  layout: "school",
});

let loading = ref(true);

const { openUrl } = useHelpers();

const { getOrders } = useStore();

const { fetchOrders } = useSupabase();

onMounted(async () => {
  loading.value = true;
  await fetchOrders();
  loading.value = false;
})
</script>

<template>
  <div class="container my-6 courses">
    <header class="mb-8 text-center">
      <h2>Courses</h2>
      <p class="text-center">Your courses list.</p>
    </header>
    <div v-if="loading" class="grid grid-cols-3 gap-3">
      <LoadingArticle v-for="item in 6" :key="item.id" />
    </div>
    <div v-else>
      <div v-if="getOrders && getOrders.length > 0">
        <CoursesList class="my-8" :orders="getOrders" />
      </div>
      <div v-else class="pt-6 pb-8 text-center user-card">
        <p class="mb-4 text-white">You have no course yet.</p>
        <button class="btn btn-primary" @click="openUrl('https://tally.so/r/nGeW4p')">I don't see my course</button>
      </div>
      <!-- <div class="my-12 suggestions">
      <h3>You may be interested by...</h3>
      <CoursesList class="my-8" />
    </div> -->
    </div>
  </div>
</template>

<style lang="scss"></style>
