<script setup>
const props = defineProps(["title", "url", "description"])
const { openUrl } = useHelpers();
</script>

<template>
  <div class="card overflow-hidden" @click="openUrl(props.url)">
    <div class="card--inside grid w-full overflow-hidden">
      <slot />
      <div class="grid gap-1 text-left px-5 pt-8 pb-4">
        <h2 class="font-[600]">{{props.title}}</h2>
        <p class="text-base leading-1">{{props.description}}</p>
      </div>
    </div>
  </div>
</template>