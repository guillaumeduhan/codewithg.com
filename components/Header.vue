<script setup lang="ts">
const supabase = useSupabaseAuthClient();
const user = ref<any>(null)

onMounted(async () => {
  const response = await supabase.auth.getUser()
  if (response) {
    const { data } = response
    if (data) {
      user.value = data.user
    }
  }
})
</script>

<template>
  <div class="container grid grid-cols-2 py-6 Header">
    <div class="flex items-center">
      <Logo class="mr-2" />
      <div class="uppercase label bg-primary-500">new</div>
    </div>
    <div class="flex items-center justify-end">
      <div v-if="user" class="flex items-center justify-center">
        <button class="btn btn-info" @click="$router.push('/courses')">
          Courses
        </button>
        <Avatar :email="user.email" class="cursor-pointer" @click="$router.push('/profile')" />
      </div>
      <div v-else>
        <!-- <div class="alert alert-success">Platform is coming soon!</div> -->
        <button class="btn btn-primary" @click="$router.push('/login')">
          {{ $t("general.login") }}
        </button>
      </div>
    </div>
  </div>
</template>