<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
  layout: 'school'
})
const router = useRouter()
const supabase = useSupabaseAuthClient()
const user = ref<any | null>(null)
const response = await supabase.auth.getUser();
if (response) {
  const { data } = response;
  user.value = data.user;
}

const logout = () => {
  supabase.auth.signOut()
  router.push('/')
}
</script>

<template>
  <div class="container text-center Profile">
    <header class="mb-8">
      <h2 class="mb-4">My profile</h2>
      <p>Find all informations concerning your account.</p>
    </header>
    <main v-if="user" class="mx-auto">
      <div class="mb-12">
        <Avatar :email="user.email" class="mb-4" />
        <p class="mb-4 text-white">{{ user.email }}</p>
      </div>
      <div>
        <button class="btn btn-primary" @click="logout">Logout</button>
      </div>
    </main>
  </div>
</template>

<style lang='scss'></style>