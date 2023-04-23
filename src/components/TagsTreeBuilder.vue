<template>
  <draggable
    v-model="tags.content"
    :key="tags.content.map((tag) => tag.id)"
    :item-key="(tag) => tag.id"
    group="tags"
  >
    <template v-slot:item="{ element }">
      <DynamicTag :tag="element" @delete="deleteTag" />
    </template>
  </draggable>
</template>

<script>
import DynamicTag from "./TagsBuilders/DynamicTag.vue";
import draggable from "vuedraggable";

export default {
  props: {
    tags: Object,
  },
  data() {
    return {};
  },
  methods: {
    deleteTag(tag) {
      const index = this.tags.content.indexOf(tag);
      if (index !== -1) {
        this.tags.content.splice(index, 1);
      }
    },
  },
  components: {
    DynamicTag,
    draggable,
  },
};
</script>
