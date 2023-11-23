<script setup>
const { openUrl } = useHelpers();
const isDev = ref(true);
const { translate, setLocale } = useStore()
</script>

<template>
  <div class="container">
    <div class="text-center mx-auto mt-2 mb-8" style="max-width: 800px">
      <h1 class="mb-4 text-5xl font-extrabold">{{ translate('hero', 'title') }}</h1>
      <p class="mb-6 leading-6 font-light">{{ translate('hero', 'description') }}</p>
      <div class="grid grid-flow-col mx-auto gap-2" style="max-width: 400px">
        <Button text="Create an account" :small="true" @click="$router.push('/login')" />
        <Button text="Free courses" :small="true" className="btn-info"
          @click="openUrl('https://www.youtube.com/@codewithguillaume')" />
      </div>
    </div>
    <div class="w-full h-[400px]">
      <iframe v-if="isDev"
        src="https://player.vimeo.com/video/809862220?h=f6c506eec6&amp;badge=0&amp;autoplay=1&amp;player_id=0&amp;app_id=58479"
        frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen
        style="relative; top: 0; right: 0; width: 100%; height: 100%" title="Welcome to codewithguillaume.com"></iframe>
    </div>
  </div>
</template>
