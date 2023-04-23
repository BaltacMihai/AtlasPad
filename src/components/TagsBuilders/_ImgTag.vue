<template>
  <img :src="tag.tagAttributes.src" />
</template>

<script>
export default {
  props: {
    tag: Object,
  },
};
</script>
<style lang="scss" scoped>
img {
  max-width: 100%;
  object-fit: cover;
}
</style>
