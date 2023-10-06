<script setup>
const props = defineProps(["email"])
const email = props.email
</script>

<template>
  <div class="avatar">
    <span v-if="email">{{ email[0] }}</span>
  </div>
</template>