<template>
  <template v-for="(tag, index) in tags" :key="index">
    <DynamicTag :tag="tag" @delete="deleteTag" />
  </template>
</template>

<script>
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
      const index = this.tags.indexOf(tag);
      if (index !== -1) {
        this.tags.splice(index, 1);
      }
    },
  },
  components: {
    DynamicTag,
  },
};
</script>
