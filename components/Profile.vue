<script setup lang="ts">
definePageMeta({
  middleware: 'default',
})

const emit = defineEmits(['onLogout']);

const { supabase } = useSupabase()
const { getUser } = useStore()
const router = useRouter()

const logout = async () => {
  await supabase.auth.signOut()
  emit("onLogout")
  router.push('/')
}
</script>

<template>
  <div class="w-full text-left grid gap-8">
    <header class="grid gap-4">
      <h2>My account</h2>
      <p class="text-neutral-500">Welcome to your account. You have access to private courses, conferences, and exclusive content.</p>
    </header>
    <div>
      <button class="btn btn-primary" @click="logout">Logout</button>
    </div>
  </div>
</template>