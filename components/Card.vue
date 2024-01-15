<script setup>
const props = defineProps(['title', 'description', 'label', 'url', 'centered'])
const { openUrl } = useHelpers();
</script>

<template>
  <div :class="`card card--dark flex flex-col gap-4`">
    <slot />
    <div class="grow">
      <p class="text-3xl" v-if="description">{{ description }}</p>
    </div>
    <div :class="`flex ${centered ? 'justify-center' : 'justify-start'}`">
      <Button v-if="label && url" :label="label" @click="openUrl(url)" />
    </div>
  </div>
</template>