<script setup>
const props = defineProps(["title", "url"])
const { openUrl } = useHelpers();
</script>

<template>
  <div class="card text-neutral-500 hover:text-white" @click="openUrl(props.url)">
    <div class="card--inside grid w-full">
      <slot />
      <div class="flex items-center justify-center p-8">
        <h2>{{props.title}}</h2>
      </div>
    </div>
  </div>
</template>