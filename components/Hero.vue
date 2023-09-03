<script setup>
const { openUrl } = useHelpers();
const isDev = ref(true);
</script>

<template>
  <div class="container grid grid-cols-12 items-center gap-2 mx-auto my-12 px-4 md:px-2">
    <div class="col-span-12 lg:col-span-5">
      <h1 class="mb-4">{{ $t('hero.title') }}</h1>
      <p class="mb-6 leading-6 font-light">{{ $t('hero.description') }}</p>
      <div class="flex md:flex-row gap-2 mx-auto items-center justify-start w-full my-8">
        <Button :text="$t('buttons.create_account')" :small="true" @click="$router.push('/login')" />
        <Button :text="$t('buttons.youtube')" :small="true" className="btn-info"
          @click="openUrl('https://www.youtube.com/@codewithguillaume')" />
      </div>
    </div>
    <div class="col-span-12 lg:col-span-7 relative flex items-center justify-end my-4 w-full h-[400px]">
      <iframe v-if="isDev"
        src="https://player.vimeo.com/video/809862220?h=f6c506eec6&amp;badge=0&amp;autoplay=1&amp;player_id=0&amp;app_id=58479"
        frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen
        style="relative; top: 0; right: 0; width: 100%; height: 100%" title="Welcome to codewithguillaume.com"></iframe>
    </div>
  </div>
</template>
