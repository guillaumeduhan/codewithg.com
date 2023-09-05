<script setup>
const options = ref([{
  title: "Courses",
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
  <footer class="relative bg-[#101B17] pt-10 pb-24 text-white">
    <div class="container">
      <!-- <div class="w-full grid grid-cols-12 mx-auto mb-2">
        <div class="col-span-2">
          <Logo :hideText="true" class="mb-4 w-[50px]" />
          hello
        </div>
        <div class="col-span-2">
          <p class="text-white font-medium text-sm">Free videos</p>
        </div>
        <div class="col-span-2">
          <p class="text-white font-medium text-sm">Tools</p>
        </div>
        <div class="col-span-2">
          <p class="text-white font-medium text-sm">Social</p>
        </div>
      </div> -->
      <div class="flex items-center justify-between w-full">
        <div>
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
    </div>
  </footer>
</template>

<style lang='scss'></style>