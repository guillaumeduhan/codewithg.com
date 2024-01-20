<script setup>
const props = defineProps(["user"])
const user = props.user;

const { limitString } = useHelpers()
</script>

<template>
  <div
    class="flex items-center justify-start gap-3 px-2 py-2 text-black dark:text-neutral-200 transition shadow-sm cursor-pointer border border-neutral-300 dark:border-neutral-800 rounded-xl hover:bg-neutral-50 hover:dark:bg-neutral-800">
    <div class="relative">
      <Avatar :user="user">
        <!-- image here -->
      </Avatar>
    </div>
    <div class="grow w-full hidden md:grid">
      <div class="text-sm flex  antialiased font-semibold whitespace-nowrap">
        <span>{{ limitString(user.email, 20) }}</span>
      </div>
      <div class="flex gap-1">
        <span class="text-xs antialiased">{{ limitString(user.email, 20) }}</span>
      </div>
    </div>
  </div>
</template>