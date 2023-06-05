<script setup>
const { locale } = useI18n();
const open = ref(false);
const list = ref([
  {
    code: 'en',
    imgPath: "/us.png",
    title: "English"
  },
  {
    code: 'fr',
    imgPath: "/fr.png",
    title: "Français"
  }
]);

const toggleDropdown = () => {
  open.value = !open.value;
  console.log(open.value);
}

const selectLocale = (selectedLocale) => {
  locale.value = selectedLocale;
  open.value = false;
}
</script>

<template>
  <div class="relative z-50 mx-4">
    <button @click="toggleDropdown" class="flex items-center justify-center w-6 cursor-pointer focus:outline-none">
      <img src="/us.png" v-if="locale === 'en'" />
      <img src="/fr.png" v-if="locale === 'fr'" />
    </button>

    <div v-if="open" class="absolute right-0 mt-2 overflow-hidden text-white rounded shadow-md bg-gray-500/50">
      <div v-for="item, index in list" :key="index" @click="selectLocale(item.code)"
        class="flex items-center w-32 px-3 py-2 cursor-pointer hover:bg-slate-500">
        <img :src="item.imgPath" class="w-6 mr-1" />
        <span class="text-xs">{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>
