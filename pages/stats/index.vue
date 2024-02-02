<script setup>
import numeral from "numeral";

const loading = ref(false)

const stats = {
  'Youtube': 29355,
  'LinkedIn': 13404,
  'X': 890,
  'Newsletter Freelance': 1098,
  'Newsletter code': 282,
  'Website': 167,
  'Medium': 189,
  'Dev.to': 150,
  'Hashnode': 20,
}

const views = {
  'Medium': 24214,
  'Hashnode': 9894,
  'Dev.to': 38430,
  'Youtube': 736295,
  'LinkedIn': 1443233
}

const impressions = {
  'Youtube': 9344939,
  'LinkedIn': 12443233
}

const getStats = computed(() => Object.fromEntries(Object.entries(stats).sort((a, b) => b[1] - a[1])))
const getViews = computed(() => Object.fromEntries(Object.entries(views).sort((a, b) => b[1] - a[1])))
const getImpressions = computed(() => Object.fromEntries(Object.entries(impressions).sort((a, b) => b[1] - a[1])))

const totalStats = computed(() => {
  return Object.values(stats).reduce((acc, currentValue) => acc + currentValue, 0);
});
const totalViews = computed(() => {
  return Object.values(views).reduce((acc, currentValue) => acc + currentValue, 0);
});
const totalImpressions = computed(() => {
  return Object.values(impressions).reduce((acc, currentValue) => acc + currentValue, 0);
});
</script>

<template>
  <div class="grid gap-8">
    <div class="grid gap-4">
      <h1>{{ numeral(totalStats).format('0,0') }} followers</h1>
      <div class="grid lg:grid-cols-3 gap-4">
        <Card v-for="item, key in getStats" :key="key">
          <div class="grid gap-6">
            <div>
              <span>{{ key.replace('_', ' ') }}</span>
            </div>
            <p class="text-[58px]">{{ numeral(item).format('0,0') }}</p>
          </div>
        </Card>
      </div>
    </div>
    <div class="grid gap-4">
      <h1>{{ numeral(totalViews).format('0,0') }} views</h1>
      <div class="grid lg:grid-cols-3 gap-4">
        <Card v-for="item, key in getViews" :key="key">
          <div class="grid gap-6">
            <div>
              <span>{{ key.replace('_', ' ') }}</span>
            </div>
            <p class="text-[58px]">{{ numeral(item).format('0,0') }}</p>
          </div>
        </Card>
      </div>
    </div>
    <div class="grid gap-4">
      <h1>{{ numeral(totalImpressions).format('0,0') }} impressions</h1>
      <div class="grid lg:grid-cols-3 gap-4">
        <Card v-for="item, key in getImpressions" :key="key">
          <div class="grid gap-6">
            <div>
              <span>{{ key.replace('_', ' ') }}</span>
            </div>
            <p class="text-[58px]">{{ numeral(item).format('0,0') }}</p>
          </div>
        </Card>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 12px;
}
</style>