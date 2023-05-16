<template>
  <img :src="modelValue" alt="modelValue" />
</template>
<script>
export default {
  props: {
    modelValue: String,
  },
};
</script>
<style lang="scss" scoped>
img {
  margin: 1rem;
  max-width: calc(90% - 2rem);
}
</style>
