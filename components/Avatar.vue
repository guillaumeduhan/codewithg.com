<script setup>
const props = defineProps(["user", "online", "offline"])

const { user, online, offline } = props;
</script>

<template>
  <div class="relative cursor-pointer hover:scale-105 transition">
    <div
      :class="`flex items-center justify-center overflow-hidden rounded-full ${online ? 'bg-gray-300 dark:bg-gray-600' : 'bg-slate-900 dark:bg-blue-600'} `"
      style="width:36px; height: 36px;">
      <span className="font-medium capitalize text-sm" v-if="user?.email">{{ user.email[0] || 'A' }}</span>
    </div>
    <div v-if="offline" class="bg-rose-500 absolute -bottom-1 -right-1 rounded-full border-2 border-white h-4 w-4" />
    <div v-if="online" class="bg-emerald-500 absolute -bottom-1 -right-1 rounded-full border-2 border-white h-4 w-4" />
  </div>
</template>