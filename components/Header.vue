<script setup lang="ts">
const supabase = useSupabaseAuthClient();
const user = ref<any>(null);
const { locale }: any = useI18n()

const availableLocales = computed(() => {
  return [{ code: 'en', img: './en.png' }, { code: 'fr', img: './fr.png' }]
})

const setLocale = (code: string) => locale.value = code

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
  <div class="grid grid-cols-2 px-6 py-3 ">
    <div class="flex items-center">
      <Logo class="mr-2" />
    </div>
    <div class="flex items-center justify-end">
      <!-- <div class="flex gap-4">
        <div v-for="item, index in availableLocales" :key="index" @click="setLocale(item.code)">
          <img v-if="locale !== item.code" class="w-6 h-6 cursor-pointer" :src="item.img" />
        </div>
      </div> -->
      <div v-if="user" class="flex gap-4 items-center justify-center">
        <p class="text-black cta" @click="$router.push('/courses')">Courses</p>
        <Avatar :email="user.email" class="cursor-pointer" @click="$router.push('/profile')" />
      </div>
      <div v-else class="w-[150px] flex justify-end">
        <!-- <div class="alert alert-success">Platform is coming soon!</div> -->
        <button class="btn btn-primary" @click="$router.push('/login')">
          {{ $t("buttons.signup") }}
        </button>
      </div>
    </div>
  </div>
</template>
