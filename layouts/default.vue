<script setup>
const { openUrl } = useHelpers();

</script>

<template>
  <div class="relative overflow-hidden">
    <div @click="openUrl('https://dub.sh/thedevelopercourse')"
      class="bg-green-500 w-full px-2 py-2 text-center text-black text-sm font-[600] cursor-pointer hover:bg-green-500">
      <span>-50% on thedeveloper.com — private lessons with exclusive access, released next July.</span>
    </div>
    <div class="px-4 lg:px-12 lg:py-12 max-w-[1400px] mx-auto">
      <Header />
      <slot />
      <Footer />
    </div>
  </div>
</template>