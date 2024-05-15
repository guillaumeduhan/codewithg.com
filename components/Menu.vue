<script setup lang="ts">
const { openUrl } = useHelpers();
const items = [
  {
    title: "home",
    url: "/"
  },{
    title: "courses",
    url: "/courses"
  }, {
    title: "stack",
    url: "/stack"
  }, {
    title: "repositories",
    url: "/repos"
  }
]
</script>

<template>
  <div class="flex items-center justify-between gap-6 my-8">
    <!-- <NuxtLink href="/">
      <NuxtImg src="logo.jpg" class="w-12 rounded-full cursor-pointer hover:scale-[105%] transition" />
    </NuxtLink> -->
    <div class="flex items-center justify-center gap-4 grow">
      <NuxtLink v-for='(item, index) in items' :key='index' :href="item.url">{{ item.title }}</NuxtLink>
    </div>
  </div>
</template>
