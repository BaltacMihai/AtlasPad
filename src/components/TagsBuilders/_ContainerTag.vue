<template>
  <div class="tag-container">
    <template v-for="(tagChild, index) in tag.content" :key="index">
      <DynamicTag :tag="tagChild" @delete="deleteTag" />
    </template>
    <div class="btn" @click="addElement">
      <img class="addItem" src="@/assets/icons/additem.svg" />
      <p>Add New Tag</p>
    </div>
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
        tagAttributes: {
          class: "",
          id: "",
          custom: "",
        },
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

.btn {
  background: #2c2c2c;
  width: fit-content;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  border-radius: 10px;
  img {
    width: 25px;
    margin: 0 auto;
  }
  p {
    color: #f2f2f2;
  }
  &:hover {
    cursor: pointer;
  }
}
</style>
