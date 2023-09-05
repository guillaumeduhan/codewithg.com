<script setup lang="ts">
const props = defineProps(["course"]);
const course = props.course;
const { locale } = useI18n()

const getPrice = () => {
  const { price } = props.course
  if (!price) return
  if (price === 0) return
  let str = '';
  if (locale.value === 'en') str = '$'
  return `${locale.value === 'en' && course.price !== 0 ? '$' : ''}${price}${locale.value === 'fr' && course.price !== 0 ? '€' : ''}`
}
</script>

<template>
  <div class="relative mb-4 transition cursor-pointer CoursesItem hover:opacity-80">
    <div class="absolute top-0 z-50 flex items-center m-3">
      <div class="text-white bg-purple-500 label" v-if="course.coming_soon">
        Coming soon
      </div>
    </div>
    <img v-if="course.img" :src="course.img" class="mb-4" />
    <div v-else class="w-full h-40 mb-4 rounded-lg loading" />
    <div>
      <h3 v-if="course.title" class="text-base mb-1" v-html="course.title" />
      <div class="flex items-center gap-2 description">
        {{ getPrice() || $t('general.free') }}
      </div>
    </div>
  </div>
</template>

<style lang='scss'></style>