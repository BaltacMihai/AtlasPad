<template>
  <div class="tag-container">
    <p class="tag-title">{{ tag.tagName }}</p>
    <template v-for="tagChild in tag.content">
      <DynamicTag :tag="tagChild" @delete="deleteTag" />
    </template>
    <img @click="onDelete" src="@/assets/icons/trash.svg" class="deleteIcon" />

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
    onDelete() {
      this.$emit("delete", this.tag);
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
  padding: 1.5rem;
  border: 1px solid #ded7fb;
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .tag-title {
    position: absolute;
    top: -1rem;
    left: 1rem;
    background: #fcfbfc;
    padding: 0 10px;
    color: #5d60ef;
    font-weight: bold;
  }

  .addItem {
    width: 25px;
    margin: 0 auto;
    &:hover {
      cursor: pointer;
    }
  }

  .deleteIcon {
    display: none;
    width: 20px;
    position: absolute;
    top: -0.75rem;
    right: 1rem;
    background: #fcfbfc;
    padding: 0 0.5rem;

    &:hover {
      cursor: pointer;
    }
  }

  &:hover {
    .deleteIcon {
      display: block;
    }
  }
}
</style>
