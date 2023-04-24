<template>
  <div class="tag-container">
    <draggable
      v-model="tag.content"
      :key="tag.content.map((c) => c.id)"
      :itemKey="(item) => item.id"
      group="tags"
    >
      <template v-slot:item="{ element }">
        <DynamicTag :tag="element" @delete="deleteTag" />
      </template>
    </draggable>
    <div class="btn" @click="addElement">
      <img class="addItem" src="@/assets/icons/additem.svg" />
      <p>Add New Tag</p>
    </div>
  </div>
</template>

<script>
import DynamicTag from "./DynamicTag.vue";
import draggable from "vuedraggable";
import createNewTag from "@/utils/DefaultTags/createNewTag.js";

import { usePageSettings } from "@/stores/pageSettings";
import { storeToRefs } from "pinia";
export default {
  components: {
    DynamicTag,
    draggable,
  },
  props: {
    tag: Object,
  },
  data() {
    const pageSettings = usePageSettings();
    const { fileType } = storeToRefs(pageSettings);
    return { fileType };
  },
  methods: {
    addElement() {
      const newElement = createNewTag(fileType);
      this.tag.content.push(newElement);
    },
    deleteTag(tag) {
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

  & > div:not(.btn) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
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
</style>
