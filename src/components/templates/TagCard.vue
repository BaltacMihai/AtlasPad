<template>
  <div class="tag-card">
    <TagNavbar
      :name="tag.settings.name"
      :attributes="tag.attributes"
      :mini="() => {}"
      :settings="() => {}"
      :delete="onDelete"
    />

    <div class="container">
      <component :is="tagContent" v-model="tag.content" />
    </div>
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";

import TooltipButton from "../molecules/TooltipButton.vue";
import TagNavbar from "../organisms/TagNavbar.vue";

export default {
  props: {
    tag: Object,
  },
  components: { TooltipButton, TagNavbar },
  methods: {
    onDelete() {
      this.$emit("delete", this.tag);
    },
  },
  computed: {
    tagContent() {
      switch (this.tag.settings.type) {
        case "container":
          return defineAsyncComponent(() =>
            import("@/components/pages/TagsEditor.vue")
          );
        case "text":
          return defineAsyncComponent(() =>
            import("@/components/atoms/Text.vue")
          );
      }
    },
  },
};
</script>
<style lang="scss">
.tag-card {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0px 20px 20px rgba(134, 158, 253, 0.2);

  &[draggable="true"] {
    cursor: grabbing !important;
  }
}
</style>
