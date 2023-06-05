<script setup>
const selected = ref(null);
const { tm } = useI18n();
const getQuestions = computed(() => {
  return tm("questions.list");
});
</script>

<template>
  <div class="py-4 mx-auto overflow-auto lg:my-32 QuestionsFrequently">
    <header class="mb-8 text-center">
      <h2 class="text-center">{{ $t("questions.title") }}</h2>
      <p>{{ $t("questions.description") }}</p>
    </header>
    <div class="mb-4 cursor-pointer Testimonials--Item" v-for="(item, index) in getQuestions" @click="selected = index"
      :key="index">
      <div class="flex items-start justify-start">
        <IconsQuestion class="mr-2 text-3xl transition duration-500"
          :class="selected === index ? 'text-primary-500' : 'text-gray-500'" />
        <h4>{{ item.question }}</h4>
      </div>
      <div v-if="selected === index" class="flex items-start justify-start mt-2 ml-2 transition">
        <div class="text-gray-500 transition duration-1000 delay-500">
          <IconsArrowDown />
        </div>
        <p v-html="item.answer" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.QuestionsFrequently {
  max-width: 800px;
}
</style>
