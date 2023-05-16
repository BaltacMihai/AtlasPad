<template>
  <p>{{ content }}</p>
</template>
<script>
export default {
  props: {
    content: String,
  },
};
</script>
<style lang="scss" scoped>
p {
  padding: 1rem;
}
</style>
