<script setup>
const props = defineProps(["orders"]);
const langs = [
  {
    code: "en",
    title: "English",
  },
  {
    code: "fr",
    title: "Français",
  },
];

let filter = ref('en');
</script>

<template>
  <div class="container CoursesList">
    <div class="flex gap-2 my-4">
      <div @click="filter = item.code" v-for="(item, index) in langs" :key="index" :class="`text-xs font-medium cursor-pointer px-2 py-1 relative ${filter === item.code ? 'bg-slate-800 text-white' : 'bg-slate-100 text-gray-900'
        }`">
        {{ item.title }}
        <div v-if="item.code === 'fr'" class="bg-primary-500 rounded-full h-2 w-2 absolute -top-1 -right-1"></div>
      </div>
    </div>
    <div v-if="filter">
      <CoursesEnglish v-if="filter === 'en'" />
      <CoursesFrench v-else />
    </div>
  </div>
</template>
