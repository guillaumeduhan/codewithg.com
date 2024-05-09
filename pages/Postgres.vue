<script setup>
const loading = ref(false)
</script>

<template>
  <div class="container grid gap-12 text-center">
    <header>
      <h1>Postgres</h1>
      <p>Find here everything related to Postgres: my courses, queries, and links.</p>
    </header>
    <main class="grid lg:grid-cols-3">
      <Card title="thedevelopercourse — 2024" description="The ultimate full-stack course." url="https://dub.sh/thedevelopercourse">
          <NuxtImg src="/thedevelopercourse.jpg" height="600px" class="mx-auto" />
        </Card>
    </main>
  </div>
</template>