<template>
  <SideSheet
    :title="title"
    :closing-action="handleAdditInfo"
    v-show="isOpened"
    class="additional"
  >
    <template v-if="pageSettings.fileType == 'mdx'">
      <LabeledInput
        label-name="Frontmatter"
        v-model="additionalInfo.frontMatter"
        inputType="textarea"
        placeholder="--- 
 title: Frontmatter section 
 ---"
      />
      <LabeledInput
        label-name="Imports"
        v-model="additionalInfo.imports"
        inputType="textarea"
        placeholder="import {Generator} from './mdxGenerator.js'"
      />
      <LabeledInput
        label-name="Variables & Components"
        v-model="additionalInfo.variable"
        inputType="textarea"
        placeholder="export const name = 'Baltac Mihai'"
      />
    </template>
    <template v-else-if="pageSettings.fileType == 'html'">
      <LabeledInput
        label-name="Title"
        v-model="additionalInfo.title"
        inputType="customSwitch"
        :options="['Same as File', 'Custom']"
      />
      <tabs :options="{ useUrlFragment: false }" nav-item-class="nav-item">
        <tab name="Meta">
          <LabeledInput
            label-name="Charset"
            v-model="additionalInfo.meta.charset"
            inputType="customSwitch"
            :options="['None', 'Custom']"
            placeholder="UTF-8"
          />

          <LabeledInput
            label-name="Keywords"
            v-model="additionalInfo.meta.keywords"
            inputType="customSwitch"
            :options="['None', 'Custom']"
            placeholder="HTML,CSS, JavaScript"
          />
          <LabeledInput
            label-name="Description"
            v-model="additionalInfo.meta.description"
            inputType="customSwitch"
            :options="['None', 'Custom']"
            placeholder="Generated with Tagless"
          />
          <LabeledInput
            label-name="Author"
            v-model="additionalInfo.meta.author"
            inputType="customSwitch"
            :options="['None', 'Custom']"
            placeholder="Baltac Mihai"
          />
          <LabeledInput
            label-name="Viewport"
            v-model="additionalInfo.meta.viewport"
            inputType="customSwitch"
            :options="['None', 'Custom']"
            placeholder="width=device-width, initial-scale=1.0"
          />
        </tab>
        <tab name="Imports" class="imports">
          <LabeledInput
            label-name="Style"
            v-model="additionalInfo.imports.style"
            inputType="textarea"
            placeholder="<link rel='stylesheet' href='mystyle.css'>"
          />
          <LabeledInput
            label-name="Script Head"
            v-model="additionalInfo.imports.scriptHead"
            inputType="textarea"
            placeholder="<script src='myScript.js'></script>"
          />
          <LabeledInput
            label-name="Script Body"
            v-model="additionalInfo.imports.scriptBody"
            inputType="textarea"
            placeholder="<script src='myScript.js'></script>"
          />
        </tab>
        <tab name="Custom">
          <LabeledInput
            label-name="Style"
            v-model="additionalInfo.custom.style"
            inputType="textarea"
            placeholder="body { 
   background-color: linen; 
   }"
          />
          <LabeledInput
            label-name="Script"
            v-model="additionalInfo.custom.script"
            inputType="textarea"
            placeholder="document.getElementById('demo').innerHTML = 'Hello JavaScript!'';"
          />
        </tab>
      </tabs>
    </template>
  </SideSheet>
</template>
<script>
import { useFileSettings } from "@/stores/FileSettings.js";
import Button from "../atoms/Button.vue";
import LabeledInput from "../organisms/LabeledInput.vue";
import SideSheet from "../molecules/SideSheet.vue";

export default {
  props: {
    handleAdditInfo: Function,
    isOpened: Boolean,
    additionalInfo: Object,
  },
  data() {
    return {
      pageSettings: useFileSettings(),
    };
  },
  computed: {
    title() {
      if (this.pageSettings.fileType == "mdx") return "Frontmater";
      else return "Head";
    },
  },
  components: { Button, LabeledInput, SideSheet },
};
</script>
<style lang="scss">
.additional {
  width: 33%;
  max-height: 85vh;

  textarea {
    border-radius: 10px;
    border: 1px solid $cl-primary;
    font-size: $fs-text;
    padding: 1rem !important;
    height: 15vh;
  }

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
      overflow: auto;
      max-height: 60vh;

      &::-webkit-scrollbar {
        width: 3px;
        border-radius: 10px;

        &-track {
          background: #aabbff;
        }
        &-thumb {
          background: $cl-primary;
        }
      }

      .tabs-component-panel {
        display: flex;
        align-items: baseline;
        flex-direction: column;

        &.imports {
          textarea {
            height: 10vh;
          }
        }

        gap: 1rem;
        .input-group {
          width: 100%;
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
