<script setup>
const loading = ref(false)
const skills = ref(["Next.js", "Javascript", "Friendly"])
const position = ref(["Full-time", "Remote", "Tech"])
</script>

<template>
  <div class="grid gap-6 border dark:border-neutral-600 rounded-xl mx-auto max-w-[500px] w-full shadow overflow-hidden p-4 pb-6">
    <header class="flex items-center gap-4">
      <div class="w-12 h-12 rounded-lg bg-slate-800" />
      <div class="grid">
        <p class="text-sm text-neutral-400">Company</p>
        <p>$90,000 — $100,000</p>
      </div>
    </header>
    <main class="grid gap-4">
      <div>
        <p class="font-[500]">Senior Software Developer</p>
        <p class="text-sm text-neutral-400">Nashville, Tennessee</p>
      </div>
      <div class="grid gap-2">
        <p class="text-sm text-neutral-400">Matching Skills</p>
        <div class="flex items-center gap-2">
          <div v-for='(item, index) in skills' :key='index' class="px-3 py-1 text-sm font-[600] text-emerald-600/80 bg-emerald-200 dark:bg-emerald-200/5 rounded-full">
            {{ item }}
          </div>
        </div>
      </div>
      <div class="grid gap-2">
        <p class="text-sm text-neutral-400">About this position</p>
        <div class="flex items-center gap-2">
          <div v-for='(item, index) in position' :key='index' class="px-3 py-1 text-sm font-[600] text-emerald-600/80 bg-emerald-200 dark:bg-emerald-200/5 rounded-full">
            {{ item }}
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
