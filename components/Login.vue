
<script setup>
const showPassword = ref(false);
const setForgot = ref(false);
const user = ref({
  email: '',
  password: ''
});

const error = ref("Please enter a password of at least 9 letters including 1 digit and 1 special character.");


const signInWithGoogle = () => console.log("Signing in with Google");
const signIn = () => console.log("Signing in with email and password", user.value);
const forgotPassword = () => console.log("Password recovery");
</script>

<template>
  <div class="grid gap-4 border dark:border-neutral-600 rounded-xl mx-auto max-w-[500px] w-full px-8 py-6 shadow">
    <div v-if="!setForgot">
      <h1 class="mb-6 text-3xl font-bold text-center">Login or Signup</h1>
      <div class="grid w-full gap-2 pb-8 mb-6 border-b dark:border-neutral-600">
        <button class="social" @click="signInWithGoogle">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="0.98em" height="1em" viewBox="0 0 256 262"><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"></path><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path></svg>
            <span>Connect with Google</span>
          </div>
        </button>
      </div>
      <div class="grid gap-6">
        <div class="grid w-full gap-4">
          <div class="grid gap-1">
            <label for="email">
              Email
            </label>
            <input type="text" id="email" v-model="user.email" placeholder="Enter email">
          </div>
          <div class="grid gap-1">
            <label for="password">
              Password
            </label>
            <input :type="showPassword ? 'text' : 'password'" id="password" v-model="user.password" placeholder="Password">
            <p class="text-xs cursor-pointer" @click="showPassword = !showPassword">{{ showPassword? 'Hide password' : 'Show password' }}</p>
          </div>
        </div>
        <div v-if="error" class="alert">{{ error }}</div>
        <button class="black" @click="signIn">
          <div>Connect</div>
        </button>
        <div class="flex flex-col items-center w-full">
          <div class="text-sm text-center text-neutral-500">
            If you do not have an account, one will be automatically created and you will receive a confirmation email.
          </div>
          <br>
        </div>
      </div>
    </div>
    <div v-else>
      <h1 class="mb-6 text-3xl font-bold text-center">Forgot your password?</h1>
      <div class="grid w-full gap-2 pb-8 dark:border-neutral-600">
        <p class="text-sm">Enter your email below to receive password reset instructions.</p>
        <div class="grid gap-4">
          <div class="grid gap-1">
            <label for="email">
            Email
            </label>
            <input type="text" id="email" v-model="user.email" placeholder="Enter email">
          </div>
          <div v-if="error" class="alert">{{ error }}</div>
          <button class="black" @click="forgotPassword">
            <div>Send password recovery</div>
          </button>
        </div>
      </div>
    </div>
    <footer class="text-center">
      <div class="text-sm text-blue-500 cursor-pointer hover:text-blue-700" @click="setForgot = !setForgot">
        {{ setForgot? 'Login or Signup' : 'I forgot my password' }}
      </div>
    </footer>
  </div>
</template>

<style scoped>
button {
  @apply relative rounded transition cursor-pointer w-full py-3 flex items-center gap-2 text-base shadow;

  &.social {
    @apply border dark:border-neutral-600 hover:bg-neutral-50 hover:dark:bg-neutral-800 font-[500];
  }

  &.black {
    @apply border-none flex items-center bg-black text-white dark:bg-neutral-800 hover:bg-neutral-800;
  }

  div {
    @apply flex items-center gap-2 mx-auto;
  }
}

svg {
  @apply text-xl;
}

label {
  @apply text-sm font-bold;
}

input[type="text"],
input[type="password"] {
  @apply bg-transparent relative rounded border dark:border-neutral-600 hover:bg-neutral-50 hover:dark:bg-neutral-800 transition cursor-pointer w-full px-4 py-2 outline-none focus:border-neutral-300 focus:bg-neutral-50;

  focus {
    @apply border-black;
  }
}

.alert {
  @apply rounded bg-red-50 dark:bg-red-900/10 text-red-500 text-xs px-3 py-2;
}
</style>