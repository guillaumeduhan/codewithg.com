<template>
  <header class="flex items-center justify-center gap-2 mb-12 w-full">
    <div class="flex items-center justify-center gap-4 cursor-pointer py-4 lg:py-8" @click="$router.push('/')">
      <div class="relative cursor-pointer hover:scale-105 transition">
        <div class="bg-green-500 absolute bottom-0 right-0 rounded-full border-2 border-white h-4 w-4" />
        <div class="rounded-full overflow-hidden w-[56px] h-[56px]">
          <img src="/end.png" alt="Guillaume Duhan">
        </div>
      </div>
      <div class="gap-2 items-start">
        <h1 class="text-[36px] lg:text-[72px] mb-0">
          @codewithguillaume
        </h1>
      </div>
    </div>
  </header>
</template>
