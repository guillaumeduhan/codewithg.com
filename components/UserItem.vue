<script setup>
const props = defineProps(["user"])
const user = props.user;

const { limitString } = useHelpers()
</script>

<template>
  <div class="flex items-center justify-start gap-3 px-2 py-2 text-black transition shadow-sm cursor-pointer border rounded-xl hover:bg-gray-50">
    <div class="relative">
      <Avatar :user="user">
        <!-- image here -->
      </Avatar>
    </div>
    <div class="grid grow w-full">
      <div class="text-sm antialiased font-semibold whitespace-nowrap">
        <span>{{ limitString(user.email, 20) }}</span>
      </div>
      <div class="flex gap-1">
        <span class="text-xs antialiased">{{ limitString(user.email, 20) }}</span>
      </div>
    </div>
  </div>
</template>