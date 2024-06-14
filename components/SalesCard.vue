<script setup>
const loading = ref(false)
const props = defineProps(["title", "progression", "money", "value", "type"]);
const {
  items = [
    {
      legend: 'Mar',
      value: 75
    }, {
      legend: 'Apr',
      value: 64
    }, {
      legend: 'May',
      value: 79
    }, {
      legend: 'Jun',
      value: 100
    }
  ],
  title = "Sales Revenue",
  value = "10,323.93",
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
    <main class="grid items-end grid-cols-2 gap-4">
      <div>
        <h2 class="text-[32px] font-[600]"><span class="text-neutral-400">$</span>{{value}}</h2>
        <p class="text-sm text-neutral-400">This month, your global revenue {{ positive ? 'increased' : 'decreased' }} by {{progression}}%</p>
      </div>
      <div class="relative flex items-end justify-end gap-4 text-sm font-[500] text-neutral-400">
        <div v-for='(item, index) in items' :key='index' class="relative flex flex-col items-end justify-end h-24 h-full gap-2">
          <div :class="`w-6 rounded ${index === items.length - 1 ? positive ? 'bg-emerald-500': 'bg-red-500' : 'bg-neutral-200 dark:bg-neutral-600'}`" :style="`height: ${item.value}%;`" />
          <span>{{item.legend}}</span>
        </div>
      </div>
    </main>
  </div>
</template>
