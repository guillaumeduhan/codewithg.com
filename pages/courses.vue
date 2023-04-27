<script setup>
definePageMeta({
  middleware: "auth",
  layout: "school",
});
const user = useSupabaseUser();
const client = useSupabaseClient();
const state = reactive({
  loading: false,
  disabled: false,
  error: undefined,
  orders: []
})

const fetchOrders = async () => {
  if (!user.value.email) return
  try {
    state.loading = true
    let { data } = await client
      .from('orders')
      .select(`*, courses (
        *
      )`)
      .eq('email', user.value.email)

    if (data) {
      state.orders = data
    }
  } catch (error) {
    console.log(error)
  } finally {
    state.loading = false
  }
};

onMounted(() => {
  fetchOrders();
})
</script>

<template>
  <div class="container my-6 Community">
    <header class="mb-8 text-center">
      <h2>Courses</h2>
      <p class="text-center">Your courses list.</p>
    </header>
    <div v-if="!state.loading && state.orders.length > 0">
      <CoursesList class="my-8" :orders="state.orders" />
    </div>
    <div v-else class="text-center user-card">You have no course yet.</div>
    <!-- <div class="my-12 suggestions">
      <h3>You may be interested by...</h3>
      <CoursesList class="my-8" />
    </div> -->
  </div>
</template>

<style lang="scss"></style>
