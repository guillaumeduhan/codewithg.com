<script setup>
const options = ref([{
  title: "Overview",
  url: ""
}, {
  title: "Courses",
  url: ""
}, {
  title: "Pricing",
  url: ""
}, {
  title: "Privacy & Terms",
  url: ""
}, {
  title: "Contact",
  url: ""
}])

const socials = ref([{
  icon: resolveComponent('icons-youtube'),
  action: () => window.open('https://www.youtube.com/channel/UCIr0vkvqiYN3DGs44U5eGsw', '_blank')
}, {
  icon: resolveComponent('icons-twitter'),
  action: () => window.open('https://twitter.com/blackevilgoblin', '_blank')
}, {
  icon: resolveComponent('icons-linkedIn'),
  action: () => window.open('https://www.linkedin.com/in/guillaumeduhan/', '_blank')
}, {
  icon: resolveComponent('icons-hashnode'),
  action: () => window.open('https://guillaumeduhan.hashnode.dev/', '_blank')
}])
</script>

<template>
  <footer class="relative pt-10 pb-24 text-white">
    <div class="container mx-auto mb-8">
      <Logo :hideText="true" class="mb-4" />
      <p class="w-80">A school online to learn webdevelopment & webmarketing.</p>
    </div>
    <div class="container items-center mb-12 md:flex">
      <div v-for="column, index in options" :key="index">
        <p class="mb-4 mr-6 transition cursor-pointer text-secondary-500 hover:text-primary-500">{{ column.title
        }}</p>
      </div>
    </div>
    <div class="container grid-cols-2 pt-8 mx-auto border-t md:grid border-secondary-500">
      <div>
        <p class="mb-4">© 2023 Codewithguillaume.com. All rights reserved.</p>
        <p class="flex items-start leading-4">Made with
          <IconsNuxt class="mx-1" />
          <span>, Tailwindcss & Supabase.</span>
        </p>
      </div>
      <div class="flex mt-8 md:mt-0 md:justify-end md:items-center">
        <div v-for="item, index in socials" :key="index">
          <component :is="item.icon" @click="item.action()"
            class="mx-2 text-4xl transition cursor-pointer text-secondary-500 hover:text-primary-500" />
        </div>
      </div>
    </div>
  </footer>
  <div class="footer-bg" />
</template>

<style lang='scss'></style>