<template>
  <div class="tag-single">
    <p class="tag-title">{{ tag.tagName }}</p>
    <p>{{ tag.tagAttributes }}</p>
  </div>
</template>

<script>
export default {
  props: {
    tag: Object,
  },
};
</script>

<style lang="scss" scoped>
.tag-single {
  padding: 1.5rem;
  border: 3px solid #ccc;
  position: relative;

  .tag-title {
    position: absolute;
    top: -1.75rem;
    left: 1rem;
    background: white;
    padding: 0 10px;
    color: #ccc;
    font-weight: bold;
  }
}
</style>
