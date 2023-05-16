<template>
  <p>{{ modelValue }}</p>
</template>
<script>
export default {
  props: {
    modelValue: String,
  },
};
</script>
<style lang="scss" scoped>
p {
  padding: 1rem;
}
</style>
