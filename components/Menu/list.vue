<script setup>
const items = [
  {
    title: "home",
    url: "/"
  },{
    title: "courses",
    url: "/courses"
  }, {
    title: "stack",
    url: "/stack"
  }, {
    title: "repositories",
    url: "/repos"
  }
]
</script>

<template>
  <div class="grid w-full gap-4">
    <CustomLink v-for='(item, index) in items' :key='index' :title="item.title" :url="item.url" />
  </div>
</template>