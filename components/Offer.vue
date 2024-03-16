<script setup>
const { openUrl } = useHelpers();
const open = ref(true);
</script>

<template>
  <div v-show="open" class="fixed flex items-center justify-center z-50 top-0 left-0 w-full h-screen bg-neutral-900">
    <Icon size="32" class="fixed top-4 right-4 cursor-pointer hover:scale-[110%] transition" name="ic:outline-close" @click="open = false" />
    <div class="grid gap-8 text-center">
      <header>
        <div class="rounded-full overflow-hidden w-[64px] mx-auto cursor-pointer hover:scale-[102%] transition">
          <img src="../public/end.png" alt="thedevelopercourse.com" class="mx-auto" />
        </div>
        <h1 class="text-[64px] leading-1 mb-0">thedevelopercourse.com</h1>
        <p class="text-sm">by @codewithguillaume</p>
      </header>
      <ul class="grid gap-1 font-[500] text-neutral-400">
        <li>A platform offering exclusive private video courses monthly.</li>
        <li>A 50h+ highly comprehensive course from the basics to mastery.</li>
        <li>Lifetime access, unlimited videos & exclusive access for support.</li>
      </ul>
      <div class="grid gap-2">
        <button class="bg-[#009862] text-white font-[600] flex gap-1 mx-auto hover:scale-[101%] hover:bg-[#009862]/90" @click="openUrl('https://dub.sh/thedevelopercourse')">
          <span>Pre-order now for $299</span>
          <span class="line-through text-neutral-800">$600</span>
        </button>
        <p class="text-sm">87 left. July 2024.</p>
      </div>
    </div>
  </div>
</template>