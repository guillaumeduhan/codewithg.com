<script setup>
const props = defineProps(["user"]);
const {
	background_url = '/logo.jpg',
	description = 'CTO @Allocations.com & Youtuber',
	full_name = 'Guillaume Duhan'
} = props;
</script>

<template>
  <div class=" items-start gap-2 border dark:border-neutral-600 rounded-xl mx-auto w-full shadow overflow-hidden p-4">
    <div class="flex items-center gap-2">
      <div class="min-w-12 min-h-12 w-12 h-12 overflow-hidden bg-blue-500 bg-cover border-2 border-white dark:border-neutral-600 rounded-full cursor-pointer -bottom-10 left-6 group" :style="`background-image: url(${background_url ? background_url : null})`" />
      <div class="leading-1" :style="`line-height: 1.23;`">
        <p class="font-[600]">{{ full_name }}</p>
        <p class="text-neutral-500 text-sm">{{ description }}</p>
      </div>
    </div>
    <div class="grid gap-8 w-full">
      <div contenteditable class="min-h-24 overflow-x-hidden overflow-y-auto bg-transparent outline-none p-2 rounded text-base" placeholder="Share your thoughts..." />
      <div class="flex items-center justify-between gap-2">
        <div class="flex gap-2 text-sm text-blue-500">
          <div class="cursor-pointer hover:opacity-85">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm1-8.425l4-4l4 4l4-4l1 1V5H5v6.575zM5 19h14v-6.6l-1-1l-4 4l-4-4l-4 4l-1-1zm0 0v-6.6v2V5z"/></svg>
          </div>
          <div class="cursor-pointer hover:opacity-85">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M9 16h2v-3h3v-2h-3V8H9v3H6v2h3zm-5 4q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h12q.825 0 1.413.588T18 6v4.5l4-4v11l-4-4V18q0 .825-.587 1.413T16 20zm0-2h12V6H4zm0 0V6z"/></svg>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <button class="outline">Schedule</button>
          <button class="blue">Post</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
button {
  @apply text-sm py-2 px-4 rounded-full transition cursor-pointer shadow border-none text-white text-center dark:bg-neutral-800;

	&.blue {
		@apply bg-blue-500 hover:bg-blue-400;
	}

  &.outline {
		@apply bg-transparent text-blue-500 border-blue-500 hover:bg-blue-50 hover:dark:bg-neutral-800;
	}
}

[placeholder]:empty::before {
    content: attr(placeholder);
    color: #555; 
}

[placeholder]:empty:focus::before {
    content: "Share your thoughts...";
}
</style>