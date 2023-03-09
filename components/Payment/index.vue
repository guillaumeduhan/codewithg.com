<script setup>
// 1. si tu n'es pas logué, tu ne peux pas acheter
// checker si logged in first

// 2. bosser sur le modèle de new-order et l'envoyer pour sauvegarder l'order dans Supabase


import dayjs from "dayjs"

const user = useSupabaseUser()
const props = defineProps(["course"])
const course = props.course

const { openUrl } = useHelpers()
</script>

<template>
  <div class="payment">
    <div class="author">
      Author: <p>Guillaume Duhan</p>
    </div>
    <div class="date">
      Released: <p v-if="course.created_at">{{ dayjs(course.created_at).format('DD MMMM YYYY') }}</p>
    </div>
    <div class="capitalize lang">
      Language: <p v-if="course.lang">{{ course.lang === 'en' ? 'English' : course.lang }}</p>
    </div>
    <div class="capitalize level">
      Level: <p v-if="course.level">{{ course.level }}</p>
    </div>
    <div class="duration">
      Duration: <p v-if="course.duration">{{ course.duration }} minutes</p>
    </div>
    <div class="price">
      Price: <p v-if="course.price">${{ course.price }}</p>
    </div>
    <div class="mb-4 topics">
      <div class="topic" v-for="item in course.topics" :key="item.id">
        {{ item }}
      </div>
    </div>
    <button v-if="user" class="block btn btn-primary" @click="openUrl(course.stripe_url)">Buy for ${{ course.price
    }}</button>
    <button v-else class="block btn btn-primary" @click="$router.push('/login')">Login to buy</button>
  </div>
</template>

<style lang='scss'></style>