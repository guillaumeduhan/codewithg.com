<script setup>
const items = ref([
  {
    title: "Repositories",
    link: "/repos"
  }
])
</script>

<template>
  <div class="flex items-center justify-center pt-4">
    <NuxtLink href="/">
      <div class="rounded-full overflow-hidden w-12 h-12 cursor-pointer hover:scale-[105%] transition">
        <NuxtImg src="/logo.jpg" height="600px" class="mx-auto" />
      </div>
    </NuxtLink>
  </div>
</template>