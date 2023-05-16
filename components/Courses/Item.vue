<script setup>
const props = defineProps(["course", "price"]);
const course = props.course;

const { getDaysDiff } = useHelpers();
</script>

<template>
  <div class="relative mb-4 transition cursor-pointer CoursesItem hover:opacity-80">
    <div class="absolute top-0 z-50 flex items-center m-3">
      <div class="mr-2 text-white label bg-sky-500" v-if="course.new">
        New
      </div>
      <div class="text-white bg-purple-500 label" v-if="course.coming_soon">
        Coming soon
      </div>
    </div>
    <img v-if="course.img" :src="course.img" class="mb-4" />
    <div v-else class="w-full h-40 mb-4 rounded-lg loading" />
    <div>
      <h3 v-if="course.title">{{ course.title }}</h3>
      <p v-if="course.description" class="mb-2 text-base description">
        {{ course.description }}
      </p>
      <p v-if="props.price" class="text-xl font-bold"><span class="mr-2 text-primary-500">${{ course.price }}</span>
      </p>
    </div>
  </div>
</template>

<style lang='scss'></style>