<script setup lang="ts">
import { useOrders } from '~/stores/orders';
const { openUrl, limitString, downloadFile } = useHelpers();
const { getOrders } = useOrders();

const open = ref(false);
const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  isImage: {
    type: Boolean,
    required: false,
    default: false
  },
  hasPreview: {
    type: Boolean,
    required: false,
    default: true
  }
});
const {
  title,
  description,
  price,
  path,
  img_url,
  date,
  product_id
} = props.item;

const hasOrder = computed(() => {
  const orders = toRaw(getOrders)
  if (!product_id) return;
  const found = orders.find((x: any) => x.product_id === product_id)
  if (found) return found;
  return false
})

const openItem = async () => {
  if (!hasOrder) return openUrl(path);
  const { products: { download_url } }: any = hasOrder.value;
  console.log(download_url);
  await openUrl(download_url);
}
</script>

<template>
  <div :class="`${isImage ? '' : ''} group items-center gap-4 cursor-pointer`">
    <div v-if="img_url" class="mb-4">
      <img :src="img_url" :alt="title" />
    </div>
    <div class="grid gap-4">
      <div
        :class="`${isImage ? 'grid gap-4' : 'flex gap-4'} items-start justify-between transition cursor-pointer rounded-full`">
        <div class="grid gap-2" @click="openItem()">
          <p v-if="date" class="text-gray-400 text-sm transition group-hover:text-black dark:group-hover:text-slate-200">
            {{ date }}
          </p>
          <NuxtLink class="whitespace-nowrap" target="_blank" :to='path'>
            {{ limitString(title, isImage ? 28 : 120) }} →
          </NuxtLink>
          <p class="text-gray-400 text-sm transition group-hover:text-black dark:group-hover:text-slate-200">{{
            limitString(description, isImage ? 92 : 120) }}</p>
        </div>
        <div v-if="hasOrder" @click="openItem()">
          <Button label="Download" small />
        </div>
        <div v-else>
          <div v-if="price" class="flex items-center gap-2">
            <p>${{ price }}</p>
            <span v-if="hasPreview">•</span>
            <NuxtLink v-if="hasPreview"
              class="text-gray-500 underline underline-offset-4 font-medium text-sm decoration-dashed"
              @click="open = !open">{{ open ? 'Close' : 'Video preview' }}
            </NuxtLink>
          </div>
        </div>
      </div>
      <div v-if="open">
        Video preview to come
      </div>
    </div>
  </div>
</template>