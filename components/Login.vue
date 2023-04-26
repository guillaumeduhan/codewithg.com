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
    <h2 class="mb-6">{{ $t("login.title") }}</h2>
    <div class="mb-4">
      <p class="description">{{ $t("login.description") }}</p>
    </div>
    <div v-if="state.success" class="alert alert-success">
      An e-mail has been sent to your mail address.
    </div>
    <div v-else>
      <input :disabled="state.loading" type="text" v-model="state.email" class="w-full mb-4" />
      <div class="mb-3">
        <Button class="block w-full" :loading="state.loading" :text="$t('general.magic_link')" @click="sendEmail" />
      </div>
      <p class="note">{{ $t("login.note") }}</p>
    </div>
  </div>
</template>

<style lang='scss'></style>