<template>
  <div class="tag-container">
    <p class="tag-title">{{ tag.tagName }}</p>
    <template v-for="tagChild in tag.content">
      <DynamicTag :tag="tagChild" />
    </template>

    <div class="btn" @click="addElement">ADD</div>
  </div>
</template>

<script>
import DynamicTag from "./DynamicTag.vue";

export default {
  components: {
    DynamicTag,
  },
  props: {
    tag: Object,
  },
  data() {
    return {};
  },
  methods: {
    addElement() {
      const newElement = {
        tagName: "a",
        tagAttributes: "New Element Added",
        tagType: "selfClose",
        content: false,
      };

      this.tag.content.push(newElement);
    },
  },
};
</script>

<style lang="scss" scoped>
.tag-container {
  padding: 1rem;
  border: 3px solid #ccc;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;

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
