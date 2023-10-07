<script setup>
definePageMeta({
  layout: 'landing',
  middleware: 'default'
})

const router = useRouter()
const { getOrdersCourses } = useStore();
const { courses } = useHelpers();
const slug = 'nextjs-fr'

const getCourse = computed(() => {
  const find = courses.find((x) => x.slug === slug)
  return find ? find.landing : null;
});

const hasOrdered = computed(() => {
  const find = getOrdersCourses.value.find((x) => x.slug === slug);
  return find || false
})

useHead({
  title:
    getCourse.value.title,
  link: [{ rel: 'icon', type: 'image/png', href: "/favicons/nextjs-13-favicon.ico" }],
  meta: [
    {
      name: "description",
      content: getCourse.value.description,
    },
    {
      name: "keywords",
      content:
        getCourse.value.keywords,
    },
    { name: "robots", content: "index, follow" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      property: "og:title",
      content:
        getCourse.value.title,
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://codewithguillaume.com/nextjs-13" },
    {
      property: "og:image",
      content: "https://codewithguillaume.com/courses/nextjs-fr.png",
    },
    {
      property: "og:description",
      content:
        getCourse.value.description,
    },
    { property: "og:site_name", content: "codewithguillaume.com" },
  ],
});

onMounted(() => {
  if (hasOrdered.value) {
    router.push(`/course/${slug}`)
  }
})
</script>

<template>
  <div class="landing--blue">
    <Landing :course="getCourse">
      <div class="flex gap-2">
        <div class="w-12 h-12 rounded-2xl overflow-hidden"><img src="/favicons/nextjs-13.png" /></div>
        <div>
          <p class="text-white font-bold">
            Next.js 13 en Français 🇫🇷
          </p>
          <p class="text-xs font-bold">
            par Codewithguillaume.com
          </p>
        </div>
      </div>
    </Landing>
  </div>
</template>