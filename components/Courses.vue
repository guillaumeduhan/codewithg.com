<script setup>
const loading = ref(false)
</script>

<template>
  <div class="grid md:grid-cols-3 gap-4 max-w-full">
    <Card title="thedevelopercourse — 2024" description="$12" url="https://dub.sh/thedevelopercourse">
      <NuxtImg src="/thedevelopercourse.jpg" height="600px" class="mx-auto" />
    </Card>
    <Card title="Supacourse — 2024" description="$139" url="https://dub.sh/supacourse">
      <NuxtImg src="/supacourse.jpg" height="600px" class="mx-auto" />
    </Card>
    <Card title="Next.js 14 — 2023" description="29€" url="https://dub.sh/nextjs-fr">
      <NuxtImg src="/nextfr.jpg" height="600px" class="mx-auto" />
    </Card>
  </div>
</template>