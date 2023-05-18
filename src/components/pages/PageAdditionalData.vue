<template>
  <SideSheet
    title="Frontmatter"
    :closing-action="handleAdditInfo"
    v-show="isOpened"
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
  components: { Button, LabeledInput, SideSheet },
};
</script>
<style lang="scss">
textarea {
  border-radius: 10px;
  border: 1px solid $cl-primary;
  font-size: $fs-text;
  padding: 1rem !important;
  height: 15vh;
}
</style>
