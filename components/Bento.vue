<script setup>
const { openUrl } = useHelpers()
</script>

<template>
  <div class="bento grid gap-8">
    <Card class="lg:col-span-12" url="https://dub.sh/cvXSKdV">
      <CardsYoutube />
    </Card>
    <div class="lg:col-span-12 grid lg:grid-cols-12 gap-8">
      <Card class="lg:col-span-6" url="https://dub.sh/codewithg-mentor">
        <div class="rounded-xl overflow-hidden">
          <img src="/coaching.png" alt="codewithg.com" />
        </div>
        <p>
          <span class="text-white">Coaching →</span>
          1 hour session.
        </p>
      </Card>
      <Card class="lg:col-span-6" url="https://dub.sh/codewithg-business">
        <div class="rounded-xl overflow-hidden">
          <img src="/youtube.png" alt="codewithg.com" />
        </div>
        <p>
          <span class="text-white">Partnership →</span> Just hit me up here!
        </p>
      </Card>
    </div>
    <div class="lg:col-span-12 grid lg:grid-cols-12 gap-8">
      <div class="supabase lg:col-span-12" @click="openUrl('https://dub.sh/create-supabase')">
        <h3 class="text-3xl text-center">Supabase is the best Database as a Service since Firebase.</h3>
        <div class="flex items-center justify-center">
          <button class="mx-auto">Create an account →</button>
        </div>
      </div>
    </div>
    <div class="lg:col-span-12 grid lg:grid-cols-12 gap-8">
      <div class="lg:col-span-8 grid gap-8">
        <Card url="https://dub.sh/codewithg">
          <div class="rounded-xl overflow-hidden">
            <img src="../assets/newsletter.jpg" />
          </div>
          <p>
            <span class="text-white">Newsletter →</span>
            Best coding news & tips.
          </p>
        </Card>
      </div>
      <div class="lg:col-span-4 grid gap-8">
        <Card url="https://dub.sh/top-10-ctos">
          <div class="rounded-xl overflow-hidden">
            <img src="../assets/ibt.jpg" />
          </div>
          <p>
            <span class="text-white">Top 10 CTos of 2024 →</span>
            International Business Times.
          </p>
        </Card>
        <Card url="https://dub.sh/6vbNPaH">
          <p>
            <span class="text-white">LinkedIn →</span> Follow me.
          </p>
        </Card>
        <Card url="https://dub.sh/codewithg-blade">
          <p>
            <span class="text-white">Statistics →</span>
            on Social Blade.
          </p>
        </Card>
      </div>
    </div>
  </div>
</template>