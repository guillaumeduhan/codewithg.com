<script setup>
import Supabase from '../public/brands/supabase.svg';
import Dub from '../public/brands/dub.svg';
import Plausible from '../public/brands/plausible.svg';
import Hashnode from '../public/brands/hashnode.svg';
import Calendly from '../public/brands/calendly.svg';

definePageMeta({
  title: 'Meet my stack',
  description: 'Here are the stack I have the pleasure of working with.'
})
const items = [{
  title: "Supabase is the most powerful BaaS on the market today for launching a database.",
  component: Supabase
},{
  title: "Dub is my go-to marketing tool. I can't do without it.",
  component: Dub
},{
  title: "I switched to Plausible for managing all my analytics a long time ago.",
  component: Plausible
},
// {
//   title: "Hashnode is the go-to platform when it comes to blogging.",
//   component: Hashnode
// }
]
</script>

<template>
  <div class="container grid gap-8 text-center lg:grid-cols-3">
    <div v-for='(item, index) in items' :key='index' class="shadow-lg card shadow-neutral-800/35">
      <div class="flex items-center justify-center w-full py-16 border-b border-neutral-800">
        <component :is="item.component" class="text-xl grayscale" :style="'width: 200px; height: 40px;'" />
      </div>
      <div class="grid gap-4 p-6">
        <p class="text-lg font-[400] text-left text-white">{{ item.title }}</p>
        <!-- <div class="flex items-center justify-start">
          <UiButton variant="text" class="bg-transparent bg-neutral-800">Know more</UiButton>
        </div> -->
      </div>
    </div>
  </div>
</template>
