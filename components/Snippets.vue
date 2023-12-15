<script setup>
const loading = ref(false)
const snips = [
  {
    title: "Next.js 14",
    list: [
      {
        title: "useNavigation",
        tag: "hooks",
        url: "/snippets/use-navigation"
      }
    ]
  }
]
</script>

<template>
  <div v-for="item, index in snips" :key="index">
    <h3 class="text-sm font-medium mb-4">{{ item.title }}</h3>
    <List :list="item.list" />
  </div>
</template>