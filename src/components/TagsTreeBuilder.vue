<template>
  <component :is="dynamicComponent" :tag="this.tag" />
</template>
<script>
import SingleTag from "./TagsBuilders/SingleTag.vue";
import ContentTag from "./TagsBuilders/ContentTag.vue";
import DynamicTag from "./TagsBuilders/DynamicTag.vue";

export default {
  props: {
    tag: Object,
  },
  data() {
    return {};
  },
  computed: {
    dynamicComponent() {
      switch (this.tag.tagType) {
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
