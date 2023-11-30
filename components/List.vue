<script setup>
const props = defineProps(['list', 'images']);
</script>

<template>
  <div :class="`grid ${images ? 'lg:grid-cols-2' :''} gap-8 pb-12 border-b border-dashed border-slate-600`">
    <Item
      v-for="item, index in props.list"
      :key="index"
      :item="item"
      :isImage="images"
    />
  </div>
</template>
