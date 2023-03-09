<script setup>
definePageMeta({
  middleware: 'auth'
})

const { openUrl } = useHelpers()
</script>

<template>
  <div class="container my-6 Community">
    <header class="text-center">
      <h2>Community</h2>
      <p class="mb-4 text-center">Welcome to community! Here's private space to find all news about my platform.</p>
      <button class="btn btn-info" @click="openUrl('https://tally.so/r/nGeW4p')">Ask me a question</button>
    </header>
  </div>
</template>


<style lang='scss'></style>