<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})

const emit = defineEmits(['onLogout']);

const { supabase } = useSupabase()
const { getUser } = useStore()
const router = useRouter()

const logout = () => {
  supabase.auth.signOut()
  emit("onLogout")
  router.push('/')
}
</script>

<template>
  <div class="container text-center Profile">
    <div>
      <button class="btn btn-primary" @click="logout">Logout</button>
    </div>
  </div>
</template>