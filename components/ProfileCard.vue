<script setup>
const loading = ref(false)
const props = defineProps(["small"]);
const {
	background_url = '/logo.jpg',
	background_color = '#3b82f6',
	position = 'CTO @Allocations.com & Youtuber',
	description = 'CTO of Allocations.com, previously Google, Youtuber & 15 years freelancer.',
	count = 299,
	full_name = 'Guillaume Duhan',
	localization = 'Dubai, United Arab Emirates',
	small = false,
	username= "guillaume"
} = props;
</script>

<template>
  <div :class="`grid w-full gap-12 mx-auto overflow-hidden border shadow dark:border-neutral-600 rounded-xl ${small ? 'max-w-[550px]' : ''}`">
    <div v-if="!small" class="relative w-full h-32" :style="`background-color: ${background_color}`">
			<div class="absolute w-20 h-20 overflow-hidden bg-blue-500 bg-cover border-2 border-white rounded-full cursor-pointer dark:border-neutral-600 -bottom-10 left-6 group" :style="`background-image: url(${background_url ? background_url : null})`">
				<div class="items-center justify-center hidden w-full h-full text-white bg-white/30 group-hover:flex">
					<svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 24 24"><path fill="currentColor" d="M13 19c0 .7.13 1.37.35 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v8.35c-.63-.22-1.3-.35-2-.35V5H5v14zm.96-6.71l-2.75 3.54l-1.96-2.36L6.5 17h6.85c.4-1.12 1.12-2.09 2.05-2.79zM20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2z"></path></svg>
				</div>
			</div>
			<div class="absolute flex items-center justify-center w-8 h-8 text-white rounded-full bg-white/20 top-2 right-2 hover:scale-[105%] transition hover:bg-white/30 cursor-pointer"> 
				<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M5 19h1.425L16.2 9.225L14.775 7.8L5 17.575zm-1 2q-.425 0-.712-.288T3 20v-2.425q0-.4.15-.763t.425-.637L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.437.65T21 6.4q0 .4-.138.763t-.437.662l-12.6 12.6q-.275.275-.638.425t-.762.15zM19 6.4L17.6 5zm-3.525 2.125l-.7-.725L16.2 9.225z"></path></svg>
			</div>
		</div>
    <div :class="`relative grid gap-4 ${small  ? 'p-4' : 'px-6 pb-6'}`">
			<div v-if="!small" class="absolute flex items-center justify-center w-8 h-8 text-neutral-400 rounded-full bg-neutral-100 top-2 right-2 hover:scale-[105%] transition hover:bg-neutral-200 dark:bg-neutral-800 cursor-pointer"> 
				<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M5 19h1.425L16.2 9.225L14.775 7.8L5 17.575zm-1 2q-.425 0-.712-.288T3 20v-2.425q0-.4.15-.763t.425-.637L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.437.65T21 6.4q0 .4-.138.763t-.437.662l-12.6 12.6q-.275.275-.638.425t-.762.15zM19 6.4L17.6 5zm-3.525 2.125l-.7-.725L16.2 9.225z"></path></svg>
			</div>
      <header class="grid gap-1">
				<div v-if="small" class="w-12 h-12 overflow-hidden bg-blue-500 bg-cover border-2 border-white rounded-full cursor-pointer dark:border-neutral-600 -bottom-10 left-6 group" :style="`background-image: url(${background_url ? background_url : null})`" />
        <h1 class="text-xl font-[600] mb-0" style="line-height: 1;">{{ full_name }}</h1>
        <div v-if="!small" class="grid gap-1">
					<p class="text-base font-[500] text-neutral-600">{{ position }}</p>
        	<p class="text-xs text-neutral-400">{{ localization }}</p>
        	<p class="text-xs font-[600]">{{ count }} followers</p>
				</div>
				<div v-else class="grid gap-2 text-neutral-400">
        	<p class="text-sm font-[600]">@{{ username }}</p>
					<p class="text-[14px] font-[500]">{{ description }}</p>
				</div>
      </header>
			<div :class="`flex items-center gap-2 ${small? 'absolute top-4 right-4' : ''}`">
				<button :class="`blue ${small ? 'small' : ''}`">Follow</button>
				<button :class="`outline ${small ? 'small' : ''}`">Message</button>
			</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
button {
  @apply text-sm py-2 px-8 rounded-full transition cursor-pointer shadow border-none text-white text-center dark:bg-neutral-800;

	&.small {
		@apply py-1 px-4;
	}

	&.blue {
		@apply bg-blue-500 hover:bg-blue-400;
	}

	&.outline {
		@apply bg-transparent text-blue-500 border-blue-500 hover:bg-blue-50 hover:dark:bg-neutral-800;
	}
}
</style>