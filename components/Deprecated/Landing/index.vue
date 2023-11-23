<script setup>
const props = defineProps(["course"])
const { translate } = useStore();
const { getPrice, openUrl } = useHelpers();
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
          <button class="btn mb-4" @click="openUrl(course.stripe_url)">
            Acheter ce cours — {{ getPrice(course.price, 'fr') }}
          </button>
          <p class="text-xs text-gray-500">{{ course.notes }}</p>
        </div>
        <div
          class="flex items-center justify-center my-4 max-w-[700px] w-[100%] mx-auto h-[200px] md:h-[300px] lg:h-[400px]">
          <iframe width="100%" height="100%"
            :src="`https://www.youtube.com/embed/${course.trailer_code}?amp;controls=0&rel=0&web-share=0`"
            title="YouTube video player" frameborder="0" allow="" controls=0 rel=0 allowfullscreen></iframe>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="c, index in course.program" :key="index" class="box border border-gray-800 px-6 py-4 min-h-[300px]">
          <div class="icon">
            <IconsPlay />
          </div>
          <header>
            <p class="text-xl font-bold text-white mb-2">{{ index + 1 }}. {{ c.title }}</p>
            <p class="text-base text-white/75 mb-2">{{ c.time }} min</p>
          </header>
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