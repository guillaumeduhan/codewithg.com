<script setup>
const { openUrl } = useHelpers();
</script>

<template>
  <header class="container grid gap-4 mx-auto max-w-[900px] mx-auto">
    <div class="text-[24px]">
      <div class="flex items-center gap-2">Hey, I'm Guillaume!
        <div class="overflow-hidden rounded-full max-w-12 max-h-12">
          <img src="/short.jpg" alt="Guillaume Duhan" />
        </div>
      </div>
      <div>
        CTO of Allocations.com, previously Google, Youtuber & 15 years freelancer. Currently living in Dubai 🇦🇪.
      </div>
    </div>
    <div class="flex gap-2">
      <button class="primary" @click="openUrl('https://dub.sh/thedevelopercourse')">Masterclass — $12</button>
      <button class="youtube">
        <IconsYoutube />
        <span>178k</span>
      </button>
    </div>
  </header>
</template>

<style scoped>
button {
  @apply px-4 py-2 rounded text-sm text-white;
  &.primary {
    @apply bg-neutral-900 dark:bg-neutral-800 text-white hover:bg-neutral-800;
  }
  &.youtube {
    @apply flex gap-1 bg-red-600 hover:bg-red-500 dark:bg-red-600 dark:text-white;
  }
}
</style>