<script setup>
const props = defineProps(['url'])
const { openUrl } = useHelpers();
</script>

<template>
<div class="card">
  <div :class="`card--inner`" @click="openUrl(url)">
    <slot />
  </div>
</div>
</template>