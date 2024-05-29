<script setup>
const props = defineProps(["title", "url", "description", "glow"])
const { openUrl } = useHelpers();
</script>

<template>
  <div :class="`card`" @click="openUrl(props.url)">
    <slot />
    <!-- <div class="grid gap-1 px-5 pt-8 pb-4 text-left">
      <h2 class="font-[600]">{{props.title}}</h2>
      <div class="flex gap-2">
        <p class="leading-1">{{props.description}}</p>
      <UiBadge class="bg-emerald-500">NEW</UiBadge>
      </div>
    </div> -->
  </div>
</template>