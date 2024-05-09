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
  <!-- <main class="grid gap-8">
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
      <Card title="Access now my private course" url="https://dub.sh/thedevelopercourse">
        <NuxtImg src="/thedevelopercourse.png" height="600px" class="mx-auto" />
      </Card>
    </div>
  </main> -->
  <main class="grid gap-12 max-w-[1000px] mx-auto">
    <div class="grid gap-4 text-center py-12">
      <div>
        <h1>
        @Codewithguillaume
      </h1>
      <h2 class="text-2xl text-neutral-700 font-[600]">Chief Technical Officer & Youtuber</h2>
      </div>
      <p class="mx-auto max-w-[800px]" style="line-height: 1.53!important;">CTO of Allocations.com, a SaaS for finance based in Miami, I have also a YouTube channel: @codewithguillaume. With 15 years of experience in tech as a freelancer, consultant, and Lead Developer, I have led dozens of engineering teams across Paris, London, and Berlin.</p>
    </div>
    <Courses />
  </main>
</template>