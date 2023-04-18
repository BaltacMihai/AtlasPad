<template>
  <template v-for="tag in tags">
    <component :is="dynamicComponent(tag)" :tag="tag" @delete="deleteTag" />
  </template>
</template>
<script>
import SingleTag from "./TagsBuilders/SingleTag.vue";
import ContentTag from "./TagsBuilders/ContentTag.vue";
import DynamicTag from "./TagsBuilders/DynamicTag.vue";

export default {
  props: {
    tags: Object,
  },
  data() {
    return {};
  },
  methods: {
    deleteTag(tag) {
      console.log({ tag }, this.tags);
      const index = this.tags.indexOf(tag);
      if (index !== -1) {
        this.tags.splice(index, 1);
      }
    },
    dynamicComponent(tag) {
      switch (tag.tagType) {
        case "selfClose":
          return SingleTag;
        case "text":
          return ContentTag;
        case "container":
          return DynamicTag;
      }
    },
  },
  components: {
    SingleTag,
    ContentTag,
    DynamicTag,
  },
};
</script>
