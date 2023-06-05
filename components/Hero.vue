<template>
  <header class="container px-2 mx-auto my-6">
    <h1 class="mb-2 text-center">
      {{ $t('hero.title') }}
    </h1>
    <p class="mx-auto text-xl text-center description" style="max-width: 800px">
      {{ $t('hero.description') }}
    </p>
    <div class="mx-auto mt-6 mb-12 overflow-hidden bg-slate-500/10 rounded-xl"
      style="max-width: 900px; height: 515px; position:relative;"><iframe
        src="https://player.vimeo.com/video/809862220?h=f6c506eec6&amp;badge=0&amp;autoplay=1&amp;player_id=0&amp;app_id=58479"
        frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen
        style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Welcome to codewithguillaume.com"></iframe>
    </div>
    <div class="flex items-center justify-center w-full">
      <IconsDown class="text-4xl text-primary-500" />
    </div>
  </header>
</template>