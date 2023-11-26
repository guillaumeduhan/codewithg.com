<script setup>
import Background from '/bg.jpeg'
</script>

<template>
  <div>
    <!-- <div :style="{ background: `url(${Background})`, backgroundSize: 'cover' }" class="group h-2 hover:h-[500px]  cursor-pointer transition-height duration-500 ease-in-out bg-cover flex items-center justify-center text-white">
      <span class="hidden group-hover:delay-500 group-hover:flex text-xs">You found the easter Egg. Promo code: CODEWITHG.</span>
    </div> -->
    <slot />
  </div>
</template>