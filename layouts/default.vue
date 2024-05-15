<script setup>
const route = useRoute()
const isHome = computed(() => {
  return route.meta.title === "CODEWITHG.COM"
})
</script>

<template>
  <div class="grid gap-12 px-4 mx-auto">
    <div class="grid gap-4 text-center max-w-[1400px] mx-auto">
      <Menu />
      <div>
        <div class="flex items-center justify-center">
          <Tag tag="📣 Twitter Official Announcement" url="https://twitter.com/blackevilgoblin/status/1790405503496958436" />
        </div>
        <h1>{{ route.meta.title }}</h1>
        <h2 v-if="isHome" class="text-2xl text-neutral-500 font-[600]">Chief Technical Officer & Youtuber</h2>
      </div>
      <p class="mx-auto max-w-[850px] text-xl" style="line-height: 1.53!important;">{{ route.meta.description }}</p>
    </div>
    <main class="grid gap-12 max-w-[1400px] mx-auto">
      <slot />
    </main>
  </div>
</template>