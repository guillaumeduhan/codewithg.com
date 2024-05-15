<script setup>
const props = defineProps(["title", "url", "description", "glow"])
const { openUrl } = useHelpers();
</script>

<template>
  <div :class="`overflow-hidden relative transition w-full rounded-[24px] cursor-pointer hover:scale-[101%] p-[1px] border ${props.glow? 'border-emerald-700 hover:border-emerald-400 shadow-lg shadow-emerald-800/25' : 'border-neutral-800'}`" @click="openUrl(props.url)">
    <slot />
    <div class="grid gap-1 px-5 pt-8 pb-4 text-left">
      <h2 class="font-[600]">{{props.title}}</h2>
      <p class="text-base leading-1">{{props.description}}</p>
    </div>
  </div>
</template>