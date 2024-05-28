<script setup>
const loading = ref(false)
</script>

<template>
  <div class="grid gap-4 md:grid-cols-3 max-w-[1400px] mx-auto">
    <Card title="thedevelopercourse — 2024" description="$12" url="https://dub.sh/thedevelopercourse">
      <NuxtImg src="/thedevelopercourse.jpg" height="600px" class="mx-auto" />
    </Card>
    <Card title="Supacourse — 2024" description="$139" url="https://dub.sh/supacourse">
      <NuxtImg src="/supacourse.jpg" height="600px" class="mx-auto" />
    </Card>
    <Card title="Next.js 14 en français — 2023" description="$10" url="https://dub.sh/nextjs-fr">
      <NuxtImg src="/nextfr.jpg" height="600px" class="mx-auto" />
    </Card>
  </div>
</template>