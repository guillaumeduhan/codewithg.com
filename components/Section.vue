<script setup>
const props = defineProps(['title'])
const { title } = props;
</script>

<template>
  <div class="border-b border-dashed border-slate-600">
    <h2>{{title}}</h2>
    <slot />
  </div>
</template>