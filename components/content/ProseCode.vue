<template>
  <div class="code-container relative">
  <header class="flex gap-2 cursor-pointer relative items-center justify-end" @click="copy(code)">
    <div class="text-xl ">
      <span class="copied-text" v-if="copied">Copied code!</span>
      <div v-else class="text-2xl">
        <IconsCopy />
      </div>
    </div>
    <span v-if="languageText" :style="{ background: languageBackground, color: languageColor }" class="language-text">
      {{ languageText }}
    </span>
  </header>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

const { copy, copied, text } = useClipboard()

const props = withDefaults(
  defineProps<{
    code?: string
    language?: string | null
    filename?: string | null
    highlights?: Array<number>
  }>(),
  { code: '', language: null, filename: null, highlights: [] }
)

const languageMap: Record<string, { text: string; color: string; background: string }> = {
  vue: {
    text: 'vue',
    background: '#42b883',
    color: 'white',
  },
  ts: {
    text: 'ts',
    background: '#007acc',
    color: 'white',
  },
}

const languageText = computed(() => (props.language ? languageMap[props.language]?.text : null))
const languageBackground = computed(() => (props.language ? languageMap[props.language]?.background : null))
const languageColor = computed(() => (props.language ? languageMap[props.language]?.color : null))
</script>

<style scoped>
.language-text {

}
</style>
