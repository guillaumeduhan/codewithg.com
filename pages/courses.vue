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

// fetch orders then courses

const fetchOrders = async () => {
  if (!user.value.email) return
  try {
    state.loading = true
    let { data, error } = await client
      .from('orders')
      .select()
      .eq('email', user.value.email)

    if (data) {
      state.orders.push([...data])
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
      <p class="text-center">Your course list.</p>
    </header>
    <p>{{ state.orders }}</p>
    <div class="text-center user-card">You have no course yet.</div>
    <div class="my-12 suggestions">
      <h3>You may be interested by...</h3>
      <CoursesList class="my-8" />
    </div>
  </div>
</template>

<style lang="scss"></style>
