<template>
  <div class="tag-editor">
    <draggable
      v-model="contentModel"
      :key="contentModel.map((c) => c.id)"
      :itemKey="(item) => item.id"
      group="tags"
      class="tags-container"
    >
      <template v-slot:item="{ element }">
        <TagCard :tag="element" @delete="deleteTag" />
      </template>
    </draggable>
    <Button type="primary" @click="addTag">
      <img src="@/assets/icons/addItem.svg" alt="add Item Svg" />
      Add Tag
    </Button>
  </div>
</template>
<script>
import TagCard from "@/components/templates/TagCard.vue";
import draggable from "vuedraggable";
import Button from "../atoms/Button.vue";

import { useFileSettings } from "@/stores/FileSettings.js";
import getTagTemplate from "@/data/getTagTemplate.js";

export default {
  components: { TagCard, draggable, Button },

  props: {
    modelValue: Array,
  },
  data() {
    return {
      pageSettings: useFileSettings(),
    };
  },
  computed: {
    contentModel: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
  methods: {
    deleteTag(tag) {
      const index = this.modelValue.indexOf(tag);

      if (index !== -1) {
        this.modelValue.splice(index, 1);
      }
    },
    addTag() {
      const newElement = getTagTemplate(this.pageSettings.fileType);

      this.contentModel.push(newElement);
    },
  },
};
</script>
<style lang="scss">
.tag-editor {
  .tags-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
  }
  & > .btn {
    margin: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: white;
    background: #3252cb;
  }
}
</style>
