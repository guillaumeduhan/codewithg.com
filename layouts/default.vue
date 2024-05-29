<script setup>
const route = useRoute()
const isHome = computed(() => {
  return route.meta.title === "CODEWITHG.COM"
});
const isRoot = computed(() => {
  return route.meta.title === "Root"
});
</script>

<template>
  <div class="grid p-4 mx-auto">
    <Menu v-if="!isRoot" />
    <div class="flex items-center justify-center">
      <Tag tag="📣 Masterclass Full-Stack Developer for $12" url="https://dub.sh/thedevelopercourse" />
    </div>
    <div class="grid gap-12 mx-auto text-center">
      <div v-if="!isRoot" class="grid gap-2">
        <div class="flex items-center justify-center">
        </div>
        <h1>{{ route.meta.title }}</h1>
        <h2 v-if="isHome" class="text-2xl text-neutral-500 font-[400]">CTO & Youtuber</h2>
        <p class="mx-auto max-w-[850px]" style="line-height: 1.53!important;">{{ route.meta.description }}</p>
      </div>
      <main class="grid gap-12 mx-auto">
        <slot />
      </main>
    </div>
  </div>
</template>