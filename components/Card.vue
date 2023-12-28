<script setup>
const props = defineProps(['title', 'description', 'label'])
</script>

<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <slot />
    <div class="grid gap-6">
      <p v-if="description">{{ description }}</p>
      <div v-if="label">
        <Button :label="label" />
      </div>
    </div>
  </div>
</template>