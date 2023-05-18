<template>
  <div class="tag_settings">
    <tabs :options="{ useUrlFragment: false }" nav-item-class="nav-item">
      <tab name="Settings">
        <LabeledInput
          label-name="Type"
          v-model="tag.settings.type"
          inputType="switch"
          :options="['Regular', 'Custom']"
        />

        <template v-if="tag.settings.type == 'Regular'">
          <LabeledInput
            label-name="Name"
            v-model="tagName"
            inputType="select"
            :options="defaultTagsList"
            subtext="*Affects tag's content"
          />
        </template>
        <template v-else>
          <LabeledInput
            label-name="Name"
            v-model="tag.settings.name"
            inputType="resettableInput"
          />
          <LabeledInput
            label-name="Content Type"
            v-model="tag.settings.contentType"
            inputType="select"
            :options="['media', 'text', 'link', 'container', 'singleTag']"
            subtext="*Affects tag's content"
          />
        </template>
      </tab>
      <tab name="Attributes">
        <LabeledInput
          label-name="Id"
          v-model="tag.attributes.id"
          inputType="resettableInput"
          placeholder="Tag's id"
        />
        <LabeledInput
          label-name="Class"
          v-model="tag.attributes.class"
          inputType="resettableInput"
          placeholder="Tag's class"
        />
        <LabeledInput
          label-name="Custom"
          v-model="tag.attributes.custom"
          inputType="resettableInput"
          placeholder="data-example:'ex'"
        />
      </tab>
    </tabs>
  </div>
</template>
<script>
import LabeledInput from "./LabeledInput.vue";

import getDefaultTags from "@/data/TagsPredefined.js";
import { useFileSettings } from "@/stores/FileSettings.js";

export default {
  props: {
    tag: Object,
  },
  components: { LabeledInput },
  data() {
    return {
      tagName: this.tag.settings.name,
      pageSettings: useFileSettings(),
    };
  },
  computed: {
    defaultTagsList() {
      const defaultTags = getDefaultTags(this.pageSettings.fileType);
      return defaultTags?.map((tag) => tag.name);
    },
  },
  watch: {
    tagName(newValue, oldValue) {
      const defaultTags = getDefaultTags(this.pageSettings.fileType);
      const tagContentType = defaultTags.find((t) => t.name === newValue);
      if (tagContentType) {
        this.tag.settings.name = newValue;

        if (tagContentType.type != this.tag.settings.contentType) {
          this.tag.settings.contentType = tagContentType.type;
          switch (tagContentType.type) {
            case "container":
              this.tag.content = [];
              break;
            default:
              this.tag.content = `"${this.tag.content}"`;
              break;
          }
        }
      }
    },
  },
};
</script>
<style lang="scss">
.tag_settings {
  // border-top: 1px solid $cl-primary;

  .tabs-component {
    display: flex;
    flex-direction: column;

    &-tabs {
      display: flex;
      gap: 1rem;
      border-bottom: 1px solid $cl-secondary;
      .nav-item {
        list-style: none;
        padding: 1rem;
        a {
          text-decoration: none;
          font-size: $fs-text;
          color: $cl-black;
        }

        &.is-active {
          border-bottom: 1px solid $cl-primary;
          font-weight: bold;
          a {
            color: $cl-primary;
          }
        }
      }
    }

    &-panels {
      padding: 1rem;

      .tabs-component-panel {
        display: flex;
        align-items: baseline;
        gap: 1rem;
        .input-group {
          width: auto;
        }

        .select {
          width: 217px;
          &-content {
            overflow: hidden;
            .scrollable {
              max-height: 25vh;

              overflow: auto;
            }
          }
        }

        input {
          border: 1px solid $cl-primary;
        }
      }
    }
  }
}
</style>
