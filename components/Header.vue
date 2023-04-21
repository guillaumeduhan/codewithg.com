<script setup>
const user = useSupabaseUser()
</script>

<template>
  <div class="container grid grid-cols-2 py-6 Header">
    <Logo />
    <div class="flex items-center justify-end">
      <div v-if="user" class="flex items-center justify-center">
        <button class="btn btn-info" @click="$router.push('/courses')">
          Courses
        </button>
        <button class="btn btn-info" @click="$router.push('/community')">
          Community
        </button>
        <Avatar :email="user.email" class="cursor-pointer" @click="$router.push('/profile')" />
      </div>
      <div v-else>

        <div class="alert alert-success">🔥 Platform is coming soon !</div>
        <!-- <button class="btn btn-primary" @click="$router.push('/login')">
          {{ $t("general.login") }}
        </button> -->
      </div>
    </div>
  </div>
</template>