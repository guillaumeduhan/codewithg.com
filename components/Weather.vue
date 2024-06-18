<script setup>
const loading = ref(false)
const props = defineProps(["night"])
const {
  night = false,
  temperature = 32,
  location = "Dubai",
  highest = 38,
  lowest = 26,
} = props;
</script>

<template>
  <div :class="`relative grid items-center justify-center h-56 w-56 relative rounded-3xl mx-auto max-w-[500px] w-full shadow overflow-hidden cursor-pointer hover:scale-[102%] transition bg-gradient-to-b ${night ? 'from-black to-blue-900' : 'from-sky-200 to-sky-400'}`">
    <div :class="`w-36 h-36 rounded-full bg-gradient-to-b ${night ? 'from-gray-400 to-gray-50' : 'from-orange-400 to-orange-200'}`" />
    <div :class="`absolute text-sm p-4 bottom-0 w-full h-[50%] bg-blue-500 backdrop-blur-3xl bg-white/30 ${night ? 'text-white' : 'text-black'}`">
      <p class="text-2xl font-[600]">{{ temperature }}°</p>
      <p>{{ location }}</p>
      <p>L: {{lowest}}° • H: {{highest}}°</p>
    </div>
  </div>
</template>