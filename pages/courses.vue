<script setup>
definePageMeta({
  middleware: "auth",
  layout: "school",
});

let loading = ref(false);

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
    <div>
      <div v-if="getOrders.length > 0">
        <CoursesList class="my-8" :orders="getOrders" />
      </div>
      <div v-else class="text-center user-card">You have no course yet.</div>
      <!-- <div class="my-12 suggestions">
      <h3>You may be interested by...</h3>
      <CoursesList class="my-8" />
    </div> -->
    </div>
  </div>
</template>

<style lang="scss"></style>
