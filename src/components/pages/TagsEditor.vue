<template>
  <div class="tags-container">
    <template v-for="tag in content">
      <TagCard :tag="tag" @delete="deleteTag" />
    </template>
  </div>
</template>
<script>
import TagCard from "@/components/templates/TagCard.vue";
import draggable from "vuedraggable";
export default {
  components: { TagCard, draggable },
  props: {
    content: Array,
  },
  methods: {
    deleteTag(tag) {
      const index = this.content.indexOf(tag);

      if (index !== -1) {
        this.content.splice(index, 1);
      }
    },
  },
};
</script>
<style lang="scss">
.tags-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}
</style>
