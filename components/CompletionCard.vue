<script setup>
const loading = ref(false)
const props = defineProps(["title", "progression", "money", "value", "type"]);
const {
  members = [],
  title = "2024 Money goal",
  value = 92,
  progression = 12,
  positive = true,
  note = "You are almost there."
} = props;
</script>

<template>
  <div class="grid gap-3 border dark:border-neutral-600 rounded-xl mx-auto max-w-[500px] w-full shadow overflow-hidden py-3 px-4">
    <header class="flex items-start justify-between">
      <p class="font-[600]">{{ title }}</p>
      <svg class="transition cursor-pointer text-neutral-500 hover:scale-110" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 21 21"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 13.5v-7h-7m7 0l-8 8"/></svg>
    </header>
    <main class="grid gap-4">
      <div class="flex items-center gap-2" style="line-height:1;">
        <h2 class="text-[32px] font-[600]">{{value}}%</h2>
        <p :class="`font-[600] ${positive ? 'text-emerald-500' : 'text-red-500'}`">{{ positive ? '+' : '-' }}{{ progression }}%</p>
      </div>
      <div class="w-full h-4 overflow-hidden rounded bg-neutral-200">
        <div class="h-4 bg-emerald-500" :style="`width: ${value}%;`" />
      </div>
    </main>
    <footer>
      <p class="text-sm text-neutral-500">{{ note }}</p>
    </footer>
  </div>
</template>