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
  <button :class="`flex items-center text-sm lg:text-base gap-2${props.loading ? 'btn-loading' : ''} ${className} ${small ? 'small' : ''}`"
    :disabled="props.loading || props.disabled">
    <slot />
    <Spinner class="my-[2px]" v-if="props.loading" />
    <span v-else>{{ props.label }}</span>
  </button>
</template>
