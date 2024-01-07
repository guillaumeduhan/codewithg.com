<script setup>
const props = defineProps(['title', 'description', 'label', 'color', 'url', 'social'])
const { openUrl } = useHelpers();
</script>

<template>
  <div class="card flex flex-col gap-4" :class="color">
    <h2 :class="social ? 'text-2xl' : ''">{{ title }}</h2>
    <div class="grow h-full flex flex-col justify-end gap-4">
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