<template>
  <div class="tag-single">
    <p class="tag-title">{{ tag.tagName }}</p>
    <input v-model="tag.tagAttributes" />
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

  &:hover {
    opacity: 0.75;
    background-color: #ccc;
    cursor: pointer;
  }
}
</style>
