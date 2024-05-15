<script setup>
const loading = ref(false)
const props = defineProps(["tag", "url"])
const { openUrl } = useHelpers();
</script>

<template>
  <div class="px-3 py-1 cursor-pointer hover:scale-[105%] transition text-sm border rounded-full border-neutral-500" @click="openUrl(url)">
    {{ props.tag }}
  </div>
</template>