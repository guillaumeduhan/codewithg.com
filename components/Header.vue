<template>
  <header class="flex items-center justify-between gap-2 mb-12">
    <div class="flex items-center justify-center gap-2">
      <div class="relative cursor-pointer hover:scale-105 transition">
        <div class="bg-emerald-500 absolute bottom-0 right-0 rounded-full border-2 border-white h-4 w-4"></div>
        <div class="rounded-full overflow-hidden w-12 h-12">
          <img src="/logo.jpeg" alt="Guillaume Duhan">
        </div>
      </div>
      <div class="flex gap-2 items-start">
        <h1 class="text-base font-[600]">codewithguillaume</h1>
      </div>
    </div>
    <NuxtLink>Create an account →</NuxtLink>
  </header>
</template>