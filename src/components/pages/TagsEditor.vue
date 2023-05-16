<template>
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
</template>
<script>
import TagCard from "@/components/templates/TagCard.vue";
import draggable from "vuedraggable";
export default {
  components: { TagCard, draggable },

  props: {
    modelValue: Array,
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
  },
};
</script>
<style lang="scss">
.tags-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
}
</style>
