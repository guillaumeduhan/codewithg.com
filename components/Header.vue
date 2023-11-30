<script setup>
const { supabase, getCurrentUser } = useSupabase()
const { getUser } = useStore();
const colorMode = useColorMode()

const loading = ref(false)
const login = ref(false)
const success = ref(false)
const email = ref('')

const sendLogin = async () => {
  if (!email) return alert("Please enter your email address");
  try {
    loading.value = true;

    const { data, error } = await supabase
      .auth
      .signInWithOtp({
        email
      })

    if (data) {
      console.log(data)
      success.value = true;
    }
    console.log(error)
  } catch (error) {
    throw new Error(error);
  } finally {
    loading.value = false;
  }
};

const switchColors = () => {
  return colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}

onMounted(() => getCurrentUser());
</script>

<template>
  <header class="flex items-center justify-between gap-2 mb-12">
    <div class="flex items-center justify-center gap-2">
      <div class="relative cursor-pointer hover:scale-105 transition">
        <div class="bg-emerald-500 absolute bottom-0 right-0 rounded-full border-2 border-white h-4 w-4"></div>
        <div class="rounded-full overflow-hidden w-12 h-12">
          <img src="/logo.jpeg" alt="Guillaume Duhan">
        </div>
      </div>
      <div class="flex gap-2 items-start">
        <h1 class="text-base font-[600]">codewithguillaume</h1>
      </div>
    </div>
    <div class="flex gap-4 items-center">
      <div v-if="!getUser">
        <a v-if="!login" @click="login = true">Create an account →</a>
        <div v-if="login">
          <div v-if="!success" class="flex items-center gap-3">
            <input type="text" placeholder="me@gmail.com" />
            <Button label="Login / Signup" :loading="loading" @click="sendLogin" />
          </div>
          <div v-else class="bg-green-50 border border-green-50 border-xl text-green-800 px-4 py-1">
            Success. Check your e-mail.
          </div>
        </div>
      </div>
      <IconsSun class="text-2xl cursor-pointer hover:dark:text-white transition" @click="switchColors" />
      <UserItem v-if="getUser" :user="getUser" />
    </div>
  </header>
</template>