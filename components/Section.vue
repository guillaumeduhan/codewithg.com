<script setup>
const props = defineProps(['title'])
const { title } = props;
const open = ref(false);
</script>

<template>
  <div class="border-b border-dashed border-slate-600 w-full">
    <header class="flex items-center justify-between w-full py-4 cursor-pointer" @click="open = !open">
      <h2>{{title}}</h2>
      <div :class="`text-black dark:text-white text-3xl cursor-pointer transition duration-300 ease-out ${open ? 'rotate-180' : ''}`">
        <IconsPlus />
      </div>
    </header>
    <transition
      enter-active-class="duration-300 ease-out opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="duration-200 ease-in"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="open" class="my-8">
        <slot />
      </div>
    </transition>
  </div>
</template>