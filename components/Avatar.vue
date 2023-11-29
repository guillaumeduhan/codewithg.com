<script setup>
const props = defineProps(["user"])
const email = props.user.email;
</script>

<template>
  <div class="flex items-center justify-center overflow-hidden rounded-full bg-slate-900" style="width:36px; height: 36px;">
    <span className="font-light text-white capitalize" v-if="email">{{ email[0] }}</span>
  </div>
</template>