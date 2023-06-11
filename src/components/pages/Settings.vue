<template>
  <SideSheet
    title="Settings"
    :closing-action="handleSettings"
    v-show="isOpened"
  >
    <LabeledInput
      label-name="File name"
      v-model="pageSettings.fileName"
      inputType="resettableInput"
    />
    <LabeledInput
      label-name="File format"
      v-model="pageSettings.fileType"
      inputType="chip"
      subtext="*Affects app's content"
      :options="['html', 'md', 'mdx']"
    />
  </SideSheet>
</template>
<script>
import Button from "../atoms/Button.vue";
import ResettableInput from "../molecules/ResettableInput.vue";
import SideSheet from "../molecules/SideSheet.vue";
import LabeledInput from "../organisms/LabeledInput.vue";
import { useFileSettings } from "@/stores/FileSettings.js";

export default {
  components: { ResettableInput, LabeledInput, Button, SideSheet },
  props: {
    handleSettings: Function,
    isOpened: Boolean,
  },
  data() {
    return {
      pageSettings: useFileSettings(),
    };
  },
};
</script>
<style lang="scss"></style>
