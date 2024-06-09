<template>
  <header class="container grid gap-4 mx-auto">
    <h1><span class="font-bold">Codewithg.com</span>. CTO of Allocations.com, previously Google, freelance for 15 years. Running a YouTube channel: @codewithguillaume. Currently living in Dubai.</h1>
    <div class="flex gap-2">
      <button class="primary">Masterclass — $12</button>
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