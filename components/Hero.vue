<script setup>
const { openUrl } = useHelpers();

</script>

<template>
  <header class="container px-2 mx-auto my-6">
    <h1 class="mb-4 text-3xl md:text-6xl text-center">
      Learn through <br />
      <span class="text-primary-500">project-based courses </span>
    </h1>
    <p class="mx-auto text-base md:text-xl text-center description" style="max-width: 800px">
      Level up your skills on development & marketing.
    </p>
    <div class="flex flex-col md:flex-row gap-2 mx-auto items-center justify-center w-full my-8">
      <Button text="Create an account" :small="true" @click="$router.push('/login')" />
      <Button text="My youtube channel" :small="true" className="btn-info"
        @click="openUrl('https://www.youtube.com/@codewithguillaume')" />
    </div>
    <div class="mx-auto mt-6 mb-12 overflow-hidden bg-slate-500/10 rounded-xl"
      style="max-width: 600px; height: 340px; position: relative">
      <iframe
        src="https://player.vimeo.com/video/809862220?h=f6c506eec6&amp;badge=0&amp;autoplay=1&amp;player_id=0&amp;app_id=58479"
        frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
        title="Welcome to codewithguillaume.com"></iframe>
    </div>
  </header>
</template>
