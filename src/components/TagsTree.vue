<template>
  <div class="content-page">
    <h1>Page Title</h1>
    <div class="tag-builder">
      <TagBuilder :tag="contentJson" />
    </div>
  </div>
</template>

<script>
import TagBuilder from "./TagsTreeBuilder.vue";

export default {
  props: {
    contentJson: Object,
  },
  components: {
    TagBuilder,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.content-page {
  flex: 0 0 80%;
  display: flex;
  flex-direction: column;

  h1 {
    margin: auto;
    padding: 1rem;
    font-size: 2rem;
  }

  .tag-builder {
    padding: 2rem;
  }
}
</style>
