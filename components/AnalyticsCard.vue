<script setup>
const loading = ref(false);
const props = defineProps(["title", "metric",  "value", "type"]);
const {
  title = "This week",
  value = "2.921,33",
  metric = 12.2,
  type = "positive"
} = props;

const getMetric = computed(() => {
  if (typeof metric === "number") return `${type === 'positive' ? '+' : '-'}${metric}%`;
  return metric;
})

const getColor = computed(() => {
  switch (type) {
    case 'positive':
      return 'text-emerald-500';
      break;
    case 'even':
      return 'text-purple-500';
      break;
    case 'negative':
      return 'text-red-500';
      break;
    default:
      break;
  }
})
</script>

<template>
  <div class="grid gap-4 border dark:border-neutral-600 rounded-xl mx-auto max-w-[500px] w-full shadow overflow-hidden p-4">
    <div class="flex items-start justify-between">
      <p class="text-neutral-400">{{ title }}</p>
      <p :class="`${getColor} font-[500]`">{{ getMetric }}</p>
    </div>
    <div class="flex items-end justify-between">
      <p class="text-[40px] font-[600]"><span class="text-neutral-400">$</span>{{value}}</p>
      <p class="text-neutral-400">$2.737,21</p>
    </div>
  </div>
</template>

<style scoped>
p {
  line-height: 1;
}
</style>