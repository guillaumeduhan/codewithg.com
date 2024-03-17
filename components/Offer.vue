<script setup>
const { openUrl } = useHelpers();
const open = ref(true);

const program = [
  "Exclusive access to private videos covering full-stack web development for freelancing or entrepreneurship.",
  "Starting from basics (HTML, CSS, JS, React, Node...), progressing to marketing tools like Wordpress, Webflow, Framer, and culminating in CTO training.",
  "Monthly releases of new videos on advanced topics not found on YouTube, available for free download.",
  "Lifetime unlimited access to the platform and a private channel for communication (Telegram, Whatsapp, Email)."
]
</script>

<template>
  <div v-show="open" class="fixed flex items-center justify-center z-50 top-0 left-0 w-full h-screen bg-neutral-900">
    <Icon size="32" class="fixed top-4 right-4 cursor-pointer hover:scale-[110%] transition" name="ic:outline-close" @click="open = false" />
    <div class="grid gap-8 text-center">
      <header>
        <div class="rounded-full overflow-hidden w-[64px] mx-auto cursor-pointer hover:scale-[102%] transition">
          <img src="../public/end.png" alt="thedevelopercourse.com" class="mx-auto" />
        </div>
        <h1 class="text-[40px] lg:text-[64px] leading-1 mb-0">thedevelopercourse.com</h1>
        <p class="text-[15px]">For developers & entrepreneurs by @codewithguillaume</p>
      </header>
      <ul class="grid gap-1 font-[500] text-[14px] lg:text-base text-neutral-400">
        <li>A platform offering exclusive & private videos courses monthly.</li>
        <li>Lifetime access, unlimited videos & exclusive access for support.</li>
      </ul>
      <div class="grid gap-2">
        <button class="bg-[#009862] text-white font-[600] flex gap-1 mx-auto hover:scale-[101%] hover:bg-[#009862]/90 text-[14px] lg:text-base " @click="openUrl('https://dub.sh/thedevelopercourse')">
          <span>Pre-order for $324.50</span>
          <span class="line-through text-neutral-800">$649</span>
        </button>
        <p class="text-sm text-neutral-400">87 left. July 2024.</p>
      </div>
      <footer class="flex justify-center">
        <div class="text-sm border-b pb-1 cursor-pointer border-neutral-400 text-neutral-400" @click="openUrl('https://tally.so/r/31l9DW')">Telegram or Whatsapp?</div>
      </footer>
    </div>
  </div>
</template>