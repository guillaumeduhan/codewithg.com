<script setup>
const loading = ref(false)
const props = defineProps(["tag", "url"])
const { openUrl } = useHelpers();
</script>

<template>
  <div class="card border rounded-full px-2 py-1 text-sm border-neutral-700" @click="openUrl(url)">
    <div class="card--inside">
      {{ props.tag }}
    </div>
  </div>
</template>