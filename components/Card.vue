<script setup>
const props = defineProps(['title', 'description', 'label', 'color', 'url', 'social'])
const { openUrl } = useHelpers();
</script>

<template>
  <div class="card flex gap-4" :class="`${color} ${social ? 'items-center' : 'flex-col'}`">
    <h2 :class="social ? 'text-2xl' : ''">{{ title }}</h2>
    <div class="grow h-full flex gap-4" :class="`${social ? 'w-full items-end' : 'flex-col justify-end'}`">
      <div class="grow grid items-center">
        <slot />
      </div>
      <p v-if="description">{{ description }}</p>
      <div>
        <Button v-if="label && url" :label="label" @click="openUrl(url)" />
      </div>
    </div>
  </div>
</template>