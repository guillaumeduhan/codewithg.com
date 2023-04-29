<script setup>
definePageMeta({
  middleware: 'auth',
  layout: 'school'
})

const { openUrl } = useHelpers()
const { user } = useSupabaseUser()
</script>

<template>
  <div class="container my-6 Community">
    <header class="text-center">
      <h2>Community</h2>
      <p class="mb-4 text-center">Welcome to community! Here's private space to find all private videos, news & talks.</p>
      <!-- <button :disabled="!user" class="btn btn-info" :class="`${user ? '' : 'disabled'}`"
        @click="openUrl('https://tally.so/r/nGeW4p')">Ask me a
        question</button>
      <p class="text-xs" v-if="!user">*You need to buy at least one course to ask a question.</p> -->
    </header>
  </div>
</template>


<style lang='scss'></style>