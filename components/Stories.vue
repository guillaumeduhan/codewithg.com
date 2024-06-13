<script setup>
const TIMING = 4500;
const props = defineProps(["content", "background_url"])
const current = ref(0)
const progress = ref(100)
const {
  stories = [
    {
      background_url: "supacourse.jpg"
    },
    {
      background_url: "nextfr.jpg"
    },
    {
      background_url: "thedevelopercourse.jpg"
    }
  ]
} = props;

const incrementIndex = () => {
  current.value = (current.value + 1) % stories.length;
};

let intervalId;

const nextStory = () => {
  clearInterval(intervalId);
  intervalId = setInterval(incrementIndex, TIMING);
  incrementIndex();
}

const getProgressWidth = (index) => {
  if (index < current.value) {
    return '100%';
  } else if (index === current.value) {
    return `${progress}%`;
  } else {
    return '0%';
  }
};

onMounted(() => {
  intervalId = setInterval(incrementIndex, TIMING);
});

onUnmounted(() => {
  clearInterval(intervalId);
});

</script>

<template>
  <div class=" gap-4 min-h-[375px] border dark:border-neutral-600 rounded-xl mx-auto w-full shadow overflow-hidden cursor-pointer transition group cursor-pointer bg-cover bg-center bg-black transition duration-200" :style="`background-image: url(${stories[current].background_url ? stories[current].background_url : null})`" @click="nextStory">
    <div class="flex items-center gap-2 p-3">
      <div class="w-full h-1 overflow-hidden rounded bg-neutral-200/20" v-for='(item, index) in stories' :key='index'>
        <div :class="`h-full ${current === index ? 'animate bg-neutral-300' : current < index ? '' : 'bg-neutral-300'}`"></div>
      </div>
    </div>
  </div>
</template>

<style>
.animate {
  animation: progress-animation 4500ms linear forwards;
}

@keyframes progress-animation {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
</style>