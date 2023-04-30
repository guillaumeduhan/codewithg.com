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

const badges = [{
  "level": "Free", "text": "Birdy", "icon": "A baby bird in a nest",
  "image": "./free.png"
}, {
  "level": "Intermediate",
  "text": "Young bird",
  "icon": "A bird with its wings spread in flight",
  "image": "./bird.png"
}, {
  "level": "Advanced",
  "text": "Dangerous Eagle",
  "icon": "An eagle or falcon in mid-flight",
  "image": "./eagle.png"

}, {
  "level": "Expert",
  "text": "Master of the Skies",
  "icon": "A phoenix or other majestic bird symbolizing mastery and achievement",
  "image": "./phoenix.png"
}]

const getCurrentBadge = computed(() => {
  return
  // const length = getOrders.value.length
  if (!length) {
    return badges[0]
  }
  if (length < 3) {
    return badges[1]
  } else if (length < 5) {
    return badges[2]
  } else {
    return badges[3]
  }
})
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
        <!-- <div class="mb-8 member">
          <p class="mb-4 wavy">Current badge</p>
          <div v-if="getCurrentBadge" class="flex items-center mx-auto cursor-pointer badge" style="max-width: 600px;">
            <div class="mr-6 overflow-hidden rounded-full"
              :style="`min-height: 120px; min-width: 120px; background-image: url(${getCurrentBadge.image}); background-size: cover;`" />
            <div>
              <p class="inline-block mb-2 text-sm text-black label bg-primary-500">{{ getCurrentBadge.level }}</p>
              <p class="text-white">{{ getCurrentBadge.text }}</p>
              <p class="text-sm">{{ getCurrentBadge.icon }}.</p>
            </div>
          </div>
        </div> -->
      </div>
      <div>
        <button class="btn btn-primary" @click="logout">Logout</button>
      </div>
    </main>
  </div>
</template>

<style lang='scss'></style>