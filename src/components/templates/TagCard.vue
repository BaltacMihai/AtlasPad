<template>
  <div class="tag-card" :class="{ minimized: tag.settings.isMinimized }">
    <TagNavbar
      :name="tag.settings.name"
      :attributes="tag.attributes"
      :minim="
        () => {
          tag.settings.isMinimized = !tag.settings.isMinimized;
        }
      "
      :settings="
        () => {
          tag.settings.isSettingsOptionOpened =
            !tag.settings.isSettingsOptionOpened;
        }
      "
      :delete="onDelete"
      :isMinimized="tag.settings.isMinimized"
      @dblclick="openTag"
    />
    <TagSettings :tag="tag" v-show="tag.settings.isSettingsOptionOpened" />

    <div class="container" v-show="!tag.settings.isMinimized">
      <component :is="tagContent" v-model="tag.content" />
    </div>
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";

import TooltipButton from "../molecules/TooltipButton.vue";
import TagNavbar from "../organisms/TagNavbar.vue";
import TagSettings from "../organisms/TagSettings.vue";

export default {
  props: {
    tag: Object,
  },
  components: { TooltipButton, TagNavbar, TagSettings },
  methods: {
    onDelete() {
      this.$emit("delete", this.tag);
    },
    openTag() {
      if (
        this.tag.settings.isMinimized == true &&
        this.tag.settings.isSettingsOptionOpened == false
      ) {
        this.tag.settings.isMinimized = false;
        this.tag.settings.isSettingsOptionOpened = true;
      } else {
        this.tag.settings.isMinimized = true;
        this.tag.settings.isSettingsOptionOpened = false;
      }
    },
  },
  computed: {
    tagContent() {
      switch (this.tag.settings.contentType) {
        case "container":
          return defineAsyncComponent(() =>
            import("@/components/pages/TagsEditor.vue")
          );
        case "text":
          return defineAsyncComponent(() =>
            import("@/components/atoms/Textarea.vue")
          );
        case "media":
          return defineAsyncComponent(() =>
            import("@/components/atoms/Image.vue")
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

  textarea {
    width: -webkit-fill-available;
    padding: 1rem;
    font-size: $fs-text;
    background: transparent;
    border: none;

    &:focus-visible {
      border: none;
      outline: none;
    }
  }
}
</style>
