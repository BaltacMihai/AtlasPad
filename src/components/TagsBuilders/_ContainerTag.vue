<template>
  <div class="tag-container">
    <template v-for="tagChild in tag.content">
      <DynamicTag :tag="tagChild" @delete="deleteTag" />
    </template>
    <img class="addItem" @click="addElement" src="@/assets/icons/additem.svg" />
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
        tagName: "section",
        tagAttributes: "New Element Added",
        tagType: "container",
        content: [],
      };

      this.tag.content.push(newElement);
    },
    deleteTag(tag) {
      console.log(tag);
      const index = this.tag.content.indexOf(tag);
      if (index !== -1) {
        this.tag.content.splice(index, 1);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.tag-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.addItem {
  width: 25px;
  margin: 0 auto;
  &:hover {
    cursor: pointer;
  }
}
</style>
