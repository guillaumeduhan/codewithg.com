<script setup lang="ts">
const props = defineProps(["course", "locale"]);
const course = props.course;

const { getPrice, openUrl } = useHelpers();

const router = useRouter();

const redirect = () => {
  if (course.website) return openUrl(`/${course.website}`)
  course.soon ? openUrl(course.tally_url) : router.push(`/course/${course.slug}`)
}
</script>

<template>
  <div class="relative mb-4 transition cursor-pointer CoursesItem hover:opacity-80" @click="redirect()
    ">
    <img v-if="course.img" :src="course.img" class="mb-2" />
    <div v-else class="w-full h-40 mb-4 rounded-lg loading" />
    <div class="flex flex-col gap-1">
      <h3 v-if="course.title" class="text-base mb-0" v-html="course.title" />
      <div v-if="!course.soon" class="flex items-center gap-2 description">
        {{ getPrice(course.price, locale) || "general.free" }}
      </div>
      <div v-else class="flex">
        <p class="description text-white font-bold bg-purple-500/80 rounded-xl px-3 py-1 text-[13px]">
          {{ course.lang === "fr" ? "Bientôt" : "Coming soon" }}
        </p>
      </div>
    </div>
  </div>
</template>
