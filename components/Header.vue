<script setup>
const { openUrl } = useHelpers();
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
      <button class="youtube">
        <IconsYoutube />
        <span>Youtube channel</span>
      </button>
    </div>
    <div class="grid items-center gap-4 px-4 py-3 border rounded cursor-pointer dark:border-slate-800"
      @click="openUrl('https://dub.link/devcourse')">
      <div class="grid gap-4 lg:grid-cols-3">
        <img class="rounded shadow" src="/next.jpg" alt="next" />
        <img class="rounded shadow" src="/supabase.jpg" alt="next" />
        <img class="rounded shadow" src="/nest.jpg" alt="next" />
      </div>
      <div class="grid gap-1 text-center">
        <h2 class="font-[600] text-xl">thedevelopercourse.com</h2>
        <p>A Masterclass for Full-Stack Devs I wish I had ten years ago.</p>
        <div>
          <button class="font-[600] bg-emerald-500">Get access</button>
        </div>
      </div>
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