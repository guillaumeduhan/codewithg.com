<script setup>
definePageMeta({
  middleware: 'auth',
  layout: 'school'
})

const { openUrl, community } = useHelpers()
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
    <div class="mx-auto">
      <div class="text-center" v-for="item, index in community" :key="index">
        <header class="mb-4">
          <h3>{{ item.title }}</h3>
          <p>{{ item.date }}</p>
        </header>
        <iframe class="mx-auto" width="800" height="480" :src="item.youtube_url" title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
      </div>
    </div>
  </div>
</template>


<style lang='scss'></style>