<script setup>
const props = defineProps(["open"])

const emit = defineEmits("onClose")
</script>

<template>
<div class="fixed bg-neutral-900/50 flex items-center w-full h-full top-0 left-0 min-h-screen transition duration-300 ease-in-out" :class="open ? 'opacity-100 z-50 ' : 'opacity-0 -z-50 '">
  <div class="w-full h-full top-0 left-0 min-h-screen" @click="emit('onClose')" />
  <div class="relative bg-white p-8 transition duration-300 ease-in-out min-h-screen min-w-[600px]" :class="open ? 'translate-x-[0px]' : 'translate-x-[600px]'">
    <div class="text-black text-[32px] cursor-pointer absolute top-6 right-6">
      <IconsClose @click="emit('onClose')" />
    </div>
    <slot />
  </div>
</div>
</template>