<template>
  <div class="content-page">
    <h1>{{ pageName }}</h1>
    <div class="tag-builder">
      <TagBuilder :tags="contentJson" />
      <img
        class="addItem"
        @click="addElement"
        src="@/assets/icons/additem.svg"
      />
    </div>
  </div>
</template>

<script>
import TagBuilder from "./TagsTreeBuilder.vue";

export default {
  props: {
    contentJson: Object,
    pageName: String,
  },
  components: {
    TagBuilder,
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

      this.contentJson.push(newElement);
    },
  },
};
</script>

<style lang="scss" scoped>
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
    display: flex;
    flex-direction: column;
    gap: 3rem;

    .addItem {
      width: 25px;
      margin: 0 auto;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
