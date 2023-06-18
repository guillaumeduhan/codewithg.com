<script setup>
const props = defineProps({
  loading: Boolean,
  disabled: Boolean,
  className: String,
  text: String,
});
</script>

<template>
  <button :class="`btn btn-primary ${props.loading ? 'btn-loading' : ''} ${className}`"
    :disabled="props.loading || props.disabled">
    <Spinner class="my-1" v-if="props.loading" />
    <span v-else>{{ props.text }}</span>
  </button>
</template>
