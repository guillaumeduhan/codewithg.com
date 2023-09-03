<script setup lang="ts">
const supabase = useSupabaseAuthClient();
const user = ref<any>(null);
const { locale }: any = useI18n()

const availableLocales = computed(() => {
  return [{ code: 'en', img: './en.png' }, { code: 'fr', img: './fr.png' }]
})

onMounted(async () => {
  const response = await supabase.auth.getUser();
  if (response) {
    const { data } = response;
    if (data) {
      user.value = data.user;
    }
  }
});
</script>

<template>
  <div class="grid grid-cols-2 px-6 py-3">
    <div class="flex items-center">
      <Logo class="mr-2" />
    </div>
    <div class="flex items-center justify-end">
      <div v-if="user" class="flex gap-4 items-center justify-center">
        <p class="text-black cta" @click="$router.push('/courses')">Courses</p>
        <Avatar :email="user.email" class="cursor-pointer" @click="$router.push('/profile')" />
      </div>
      <div v-else>
        <!-- <div class="alert alert-success">Platform is coming soon!</div> -->
        <button class="btn btn-primary" @click="$router.push('/login')">
          {{ $t("buttons.signup") }}
        </button>
      </div>
      <div class="flex ml-4">
        <div v-for="item, index in availableLocales" :key="index" @click="() => locale = item.code">
          <img v-if="locale === item.code" class="w-6 h-6 cursor-pointer" :src="item.img" />
        </div>
      </div>
    </div>
  </div>
</template>
