<script setup>
const client = useSupabaseAuthClient()

useHead({
  title: "Login to codewithguillaume.com",
  description: "Page to login or to create an account on codewithguillaume.com."
})

const state = reactive({
  loading: false,
  status: undefined,
  message: undefined,
  email: undefined
});

const sendEmail = async () => {
  if (!state.email) return alert("Please enter an email")
  try {
    state.loading = true
    let { data, error } = await client.auth.signInWithOtp({
      email: state.email
    })

    if (data) state.success = true
  } catch (error) {
    console.log(error)
  } finally {
    state.loading = false
  }
};
</script>

<template>
  <div class="my-8 text-center Login" style="max-width: 400px">
    <h2 class="mb-6">Login</h2>
    <div class="mb-4">
      <p class="description">Enter your e-mail to receive a magic link</p>
    </div>
    <div v-if="state.success" class="alert alert-success">
      An e-mail has been sent to your mail address.
    </div>
    <div v-else>
      <input :disabled="state.loading" type="text" v-model="state.email" class="w-full mb-4" />
      <div class="mb-3">
        <Button class="block w-full" :loading="state.loading" @click="sendEmail" text="Login with magic link" />
      </div>
      <p class="note">If you don't have an account, it will be automatically created.</p>
    </div>
  </div>
</template>

<style lang='scss'></style>