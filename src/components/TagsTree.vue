<template>
  <div class="content-page">
    <h1>{{ pageName }}</h1>
    <div class="tag-builder">
      <TagBuilder :tags="tags" />
      <div class="btn" @click="addElement">
        <img class="addItem" src="@/assets/icons/additem.svg" />
        <p>Add New Tag</p>
      </div>
    </div>
  </div>
</template>

<script>
import TagBuilder from "./TagsTreeBuilder.vue";
import createNewTag from "@/utils/DefaultTags/createNewTag.js";
import { usePageSettings } from "@/stores/pageSettings";
import { storeToRefs } from "pinia";

export default {
  props: {
    tags: Object,
  },
  components: {
    TagBuilder,
  },
  data() {
    const pageSettings = usePageSettings();
    const { fileName, fileType } = storeToRefs(pageSettings);
    return {
      pageName: fileName,
      fileType,
    };
  },
  methods: {
    addElement() {
      const newElement = createNewTag(this.fileType);
      this.tags.content.push(newElement);
    },
  },
};
</script>

<style lang="scss" scoped>
.content-page {
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

    & > div:not(.btn) {
      display: flex;
      flex-direction: column;
      gap: 3rem;
    }
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
}
</style>
