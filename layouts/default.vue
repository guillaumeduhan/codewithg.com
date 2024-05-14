<script setup>
const route = useRoute()
const isHome = computed(() => {
  return route.meta.title === "Codewithg.com"
})
</script>

<template>
  <div class="px-4 grid gap-16 mx-auto">
    <Menu />
    <div class="grid gap-4 text-center max-w-[1400px] mx-auto">
      <div>
        <div class="flex items-center justify-center">
          <Tag tag="📣 Twitter Official Announcement" url="https://twitter.com/blackevilgoblin/status/1790405503496958436" />
        </div>
        <h1>{{ route.meta.title }}</h1>
        <h2 v-if="isHome" class="text-2xl text-neutral-600 font-[600]">Chief Technical Officer & Youtuber</h2>
      </div>
      <p v-if="isHome" class="mx-auto max-w-[850px]" style="line-height: 1.53!important;">CTO of Allocations.com, a finance SaaS Miami-based, I am running a YouTube channel: @codewithguillaume. With 15 years of exp. as a freelancer, consultant, and Lead Developer, I have led dozens of engineering teams across Paris, London, and Berlin. I am father of 2 and I live in Dubai.</p>
    </div>
    <main class="grid gap-12 max-w-[1000px] mx-auto">
      <slot />
    </main>
  </div>
</template>