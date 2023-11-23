<script setup lang="ts">
const supabase = useSupabaseAuthClient();
const { translate, setLocale } = useStore();
const user = ref<any>(null);

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
      <slot />
    </div>
    <div class="flex items-center justify-end">
      <div v-if="user" class="flex gap-4 items-center justify-center">
        <p class="text-white cta" @click="$router.push('/courses')">Courses</p>
        <Avatar :email="user.email" class="cursor-pointer" @click="$router.push('/profile')" />
      </div>
      <div v-else class="w-[150px] flex justify-end">
        <button class="btn" @click="$router.push('/login')">
          {{ translate("buttons", "signup") }}
        </button>
      </div>
    </div>
  </div>
</template>
