<script setup>
const props = defineProps(["course"])
const { translate } = useStore();
const { getPrice } = useHelpers();
</script>

<template>
  <div class="landing relative">
    <LandingHeader>
      <slot />
    </LandingHeader>
    <main class="container hero">
      <div class="fadeIn relative text-center m-auto my-4 grid gap-4">
        <h1 class="text-3xl lg:text-5xl font-extrabold max-w-[900px] m-auto" style="line-height: 1.23;">{{ course.title }}
        </h1>
        <p class="text-base lg:text-lg m-auto max-w-[700px] font-extralight">{{ course.description }}</p>
        <div>
          <button class="btn mb-4">
            Acheter ce cours — {{ getPrice(course.price, 'fr') }}
          </button>
          <p class="text-xs text-gray-500">{{ course.notes }}</p>
        </div>
        <div class="bg-slate-900/50 mx-auto h-[500px] w-[800px]"></div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="c, index in course.program" :key="index" class="box border border-gray-800 px-6 py-4 min-h-[300px]">
          <div class="icon">
            <IconsPlay />
          </div>
          <p class="text-xl font-bold text-white mb-2">{{ index + 1 }}. {{ c.title }}</p>
          <ul>
            <li class="description text-[13px] my-1" v-for="line, key in c.content" :key="key">{{ line }}</li>
          </ul>
        </div>
      </div>
      <div v-if="course.questions">
        <Questions :questions="course.questions" />
      </div>
    </main>
    <Footer />
  </div>
</template>