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
]
</script>

<template>
  <div class="container grid gap-8 text-center lg:grid-cols-3">
    <div v-for='(item, index) in items' :key='index' class="flex-col overflow-hidden border shadow-lg border-neutral-800 shadow-neutral-800/35">
    <div class="bg-[#161616] p-1">
      <div class="flex flex-col items-center justify-center w-full py-8 border-b border-neutral-800">
        <component :is="item.component" class="text-xl grayscale" :style="'width: 200px; height: 40px;'" />
      </div>
      <div class="grid gap-4 rounded">
        <p class="p-6 text-base font-[400] text-left text-white">{{ item.title }}</p>
      </div>
    </div>
    </div>
  </div>
</template>
