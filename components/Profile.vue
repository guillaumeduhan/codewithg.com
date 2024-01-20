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
      <button class="btn btn-primary border" @click="logout">Logout</button>
    </div>
    <div class="border border-neutral-700 rounded-xl border-dashed px-6 py-4">
      <p>This space is currently under construction, I will be back soon with something solid. If you ordered a course on codewithguillaume.com, send me an email to receive the downloadable version at codewithguillaume@gmail.com.</p>
    </div>
  </div>
</template>