<script setup>
const props = defineProps(["orders"]);
const { courses: localCourses } = useHelpers();
const { locale } = useI18n()
const langs = [
  {
    code: "en",
    title: "English",
  },
  {
    code: "fr",
    title: "Français",
  },
];

let filter = ref(null);

const getCourses = computed(() => {
  if (props.orders && props.orders.length > 0) {
    return props.orders.map(({ id, courses, ...rest }) => {
      const localCourse = localCourses.find((x) => x.slug === courses.slug);
      return {
        order_id: id,
        vimeo_url: courses.vimeo_url,
        ...rest,
        ...localCourse,
      };
    });
  }
  if (filter.value && filter.value.length > 0)
    return localCourses.filter((x) => x.lang === filter.value);
  return localCourses;
});

onMounted(() => {
  filter.value = locale.value
})
</script>

<template>
  <div class="container CoursesList">
    <div class="flex gap-2 my-4">
      <div @click="filter = item.code" v-for="(item, index) in langs" :key="index" :class="`text-xs font-medium cursor-pointer px-2 py-1 relative ${filter === item.code ? 'bg-slate-800 text-white' : 'bg-slate-100 text-gray-900'
        }`">
        {{ item.title }}
        <div v-if="item.code === 'fr'" class="bg-primary-500 rounded-full h-2 w-2 absolute -top-1 -right-1"></div>
      </div>
    </div>
    <div v-if="filter">
      <div v-if="filter === 'fr'">
        <div class="grid gap-8 lg:grid-cols-3">
          <CoursesItem v-for="(course, index) in getCourses" :key="index" :course="course"
            @click="$router.push(`/course/${course.slug}`)" />
        </div>
      </div>
      <div v-else>
        <div class="grid gap-8 lg:grid-cols-3">
          <CoursesItem v-for="(course, index) in getCourses" :key="index" :course="course"
            @click="$router.push(`/course/${course.slug}`)" />
        </div>
      </div>
    </div>
  </div>
</template>
