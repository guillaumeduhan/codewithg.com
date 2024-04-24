<script setup>
useHead({
  title:
    "Codewithg.com — Guillaume Duhan, CTO & Youtuber",
  meta: [
    {
      name: "description",
      content:
        "CTO of Allocations.com, a SaaS company in finance based in Miami, I have also a YouTube channel: @codewithguillaume. With 15 years of experience in tech as a freelancer, consultant, and Lead Developer, I have led dozens of engineering teams across Paris, London, and Berlin.Thedevelopercourse is the culmination of my experience, and it is a pleasure to deliver it to you today.",
    },
    {
      name: "keywords",
      content:
        "learn how to code, freecodecamp, coursera, software development, coding bootcamp, advance career, developer education",
    },
    { name: "robots", content: "index, follow" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      property: "og:title",
      content:
        "Codewithg.com | CTO & Youtuber",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://codewithg.com/" },
    {
      property: "og:image",
      content: "https://codewithg.com/images/logo.jpg",
    },
    {
      property: "og:description",
      content:
        "CTO of Allocations.com, a SaaS company in finance based in Miami, I have also a YouTube channel: @codewithguillaume. With 15 years of experience in tech as a freelancer, consultant, and Lead Developer, I have led dozens of engineering teams across Paris, London, and Berlin.Thedevelopercourse is the culmination of my experience, and it is a pleasure to deliver it to you today.",
    },
    { property: "og:site_name", content: "codewithg.com" },
  ],
});
</script>

<template>
  <main class="grid gap-8">
    <header class="text-left grid lg:grid-cols-2 items-center py-4 lg:py-6 gap-8 lg:gap-2">
      <div class="grid">
        <h1 class="text-[48px] lg:text-[72px]">
          @Codewithguillaume
        </h1>
        <h2 class="text-2xl text-neutral-500 font-[300] lg:font-[500]">Chief Technical Officer & Youtuber</h2>
      </div>
      <p class="mx-auto" style="line-height: 1.63;">CTO of Allocations.com, a SaaS for finance based in Miami, I have also a YouTube channel: @codewithguillaume. With 15 years of experience in tech as a freelancer, consultant, and Lead Developer, I have led dozens of engineering teams across Paris, London, and Berlin.</p>
    </header>
    <div class="grid gap-4">
      <Card title="THEDEVELOPERCOURSE" url="https://dub.sh/thedevelopercourse">
        <!-- <NuxtImg src="/thedev.png" height="300px" class="mx-auto" /> -->
      </Card>
      <div class="grid lg:grid-cols-6 gap-4">
        <div class="lg:col-span-2">
          <Card title="Newsletter" url="https://dub.sh/codewithg" />
        </div>
        <div class="lg:col-span-4">
          <Card title="Youtube" url="https://dub.sh/cvXSKdV" />
        </div>
      </div>
      <div class="grid lg:grid-cols-6 gap-4">
        <div class="lg:col-span-4">
          <Card title="Supabase" url="https://dub.sh/supabase" />
        </div>
        <div class="lg:col-span-2">
          <Card title="Business Request" url="https://dub.sh/codewithg-business" />
        </div>
      </div>
      <div class="grid lg:grid-cols-8 gap-4">
        <div class="lg:col-span-3">
          <Card title="LinkedIn" url="https://dub.sh/6vbNPaH" />
        </div>
        <div class="lg:col-span-3">
          <Card title="Coaching" url="https://dub.sh/codewithg-mentor" />
        </div>
        <div class="lg:col-span-2">
          <Card title="X" url="https://dub.sh/codewithg-x" />
        </div>
      </div>
    </div>
  </main>
</template>