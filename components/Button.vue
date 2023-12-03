<script setup>
const props = defineProps({
  loading: Boolean,
  disabled: Boolean,
  small: Boolean,
  className: String,
  label: String,
});
</script>

<template>
  <button :class="`btn btn-primary ${props.loading ? 'btn-loading' : ''} ${className} ${small ? 'small' : ''}`"
    :disabled="props.loading || props.disabled">
    <Spinner class="my-[2px]" v-if="props.loading" />
    <span v-else>{{ props.label }}</span>
  </button>
</template>
