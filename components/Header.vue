<script setup>
const { supabase, getCurrentUser } = useSupabase()
const { getUser } = useStore()
const colorMode = useColorMode()

const loading = ref(false)
const login = ref(false)
const success = ref(false)
const email = ref('')
const open = ref(true)

const sendLogin = async () => {
  if (!email) { return alert('Please enter your email address') }
  try {
    loading.value = true

    console.log(window.location)

    const { data, error } = await supabase
      .auth
      .signInWithOtp({
        email: email.value,
        options: {
          emailRedirectTo: window.location.href
        }
      })

    if (data) {
      success.value = true
    }
    console.log(error)
  } catch (error) {
    throw new Error(error)
  } finally {
    loading.value = false
  }
}

const switchColors = () => {
  return colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}

onMounted(() => {
  getCurrentUser()
  setInterval(() => {
    // open.value = !open.value
  }, 1500)
})
</script>

<template>
  <header class="flex items-center justify-between gap-2 mb-12">
    <div class="flex items-center justify-center gap-2 cursor-pointer" @click="$router.push('/')">
      <div class="relative cursor-pointer hover:scale-105 transition">
        <div class="bg-emerald-500 absolute bottom-0 right-0 rounded-full border-2 border-white h-4 w-4" />
        <div class="rounded-full overflow-hidden w-12 h-12">
          <img src="/logo.jpeg" alt="Guillaume Duhan">
        </div>
      </div>
      <div class="flex gap-2 items-start">
        <h1 class="text-lg font-[600]">
          CodewithGuillaume
        </h1>
      </div>
    </div>
    <div class="flex gap-4 items-center">
      <div v-if="!getUser">
        <Button v-if="!login" label="Create an account →" @click="login = true" />
        <div v-if="login">
          <div v-if="!success" class="flex items-center gap-3">
            <input v-model="email" type="text" placeholder="me@gmail.com">
            <Button label="Login / Signup" :loading="loading" @click="sendLogin" />
          </div>
          <div v-else class="notification notification-success">
            Success. Check your e-mail.
          </div>
        </div>
      </div>
      <IconsSun class="text-2xl cursor-pointer hover:dark:text-white transition" @click="switchColors" />
      <div>
        <Slidebar :open="open" @onClose="open = !open">
          <Profile @onLogout="open = !open" />
        </Slidebar>
        <UserItem v-if="getUser" :user="getUser" @click="open = !open" />
      </div>
    </div>
  </header>
</template>
