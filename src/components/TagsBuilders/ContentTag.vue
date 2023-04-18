<template>
  <div class="tag-content">
    <p class="tag-title">{{ tag.tagName }}</p>
    <p>{{ tag.content }}</p>
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
.tag-content {
  padding: 0.5rem;
  border: 1px solid #ded7fb;
  border-radius: 10px;
  position: relative;

  .tag-title {
    position: absolute;
    top: -1rem;
    left: 1rem;
    background: #fcfbfc;

    padding: 0 10px;
    color: #5d60ef;
    font-weight: bold;
  }
}
</style>
