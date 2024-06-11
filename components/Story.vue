<script setup>
const props = defineProps(["content", "background_url"])
const show = ref(false)
const {
  background_url = "./logo.jpg",
  content = "This is a cool story to display.",
  resume = "Here's a hidden resume, except on hover.",
  note = "Codewithg.com"
} = props;
</script>

<template>
  <div class=" gap-4 min-h-[375px] border dark:border-neutral-600 rounded-xl mx-auto w-full shadow overflow-hidden bg-cover bg-center hover:scale-[101%] cursor-pointer transition group" :style="`background-image: url(${background_url ? background_url : null})`" @mouseover="show = true" @mouseleave="show = false">
    <div class="bg-black/50 text-white p-6 grid gap-1 transition duration-500 h-full items-center justify-center">
      <div class="grid gap-2">
        <h2 class="text-xl transition font-bold">{{ content }}</h2>
        <Transition name="slide-fade">
          <p v-if="show" style="line-height: 1.22">{{ resume }}</p>
        </Transition>
        <p class="text-neutral-400 text-sm">{{ note }}</p>
      </div>
    </div>
  </div>
</template>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>