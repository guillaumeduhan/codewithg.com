<script setup>
definePageMeta({
  middleware: 'auth'
})

const { openUrl } = useHelpers()

const isClient = ref(false)
</script>

<template>
  <div class="container my-6 Community">
    <header class="text-center">
      <h2>Community</h2>
      <p class="mb-4 text-center">Welcome to community! Here's private space to find all private videos, news & talks.</p>
      <button :disabled="!isClient" class="btn btn-info" :class="`${isClient ? '' : 'disabled'}`"
        @click="openUrl('https://tally.so/r/nGeW4p')">Ask me a
        question</button>
      <p class="text-xs" v-if="!isClient">*You need to buy at least one course to ask a question.</p>
    </header>
  </div>
</template>


<style lang='scss'></style>