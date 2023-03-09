<script setup>
definePageMeta({
  middleware: 'auth'
})
const router = useRouter()
const client = useSupabaseAuthClient()
const user = useSupabaseUser()
const logout = () => {
  client.auth.signOut()
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
      <div class="mb-8">
        <Avatar :email="user.email" />
        <p class="mb-4">{{ user.email }}</p>
        <button class="btn btn-primary" @click="logout">Logout</button>
      </div>
    </main>
  </div>
</template>

<style lang='scss'></style>