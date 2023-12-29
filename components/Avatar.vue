<script setup>
const props = defineProps(["user", "online", "offline", "status"])
</script>

<template>
  <div class="relative cursor-pointer hover:scale-105 transition">
    <div
      :class="`flex items-center justify-center overflow-hidden rounded-full bg-neutral-800 dark:bg-neutral-800 text-white `"
      style="width:36px; height: 36px;">
      <span className="font-medium capitalize text-sm" v-if="user?.email">{{ user.email[0] || 'A' }}</span>
    </div>
    <div v-if="status" :class="`${online ? 'bg-emerald-500' : 'bg-rose-500'} absolute -bottom-1 -right-1 rounded-full border-2 border-white h-4 w-4`" />
  </div>
</template>