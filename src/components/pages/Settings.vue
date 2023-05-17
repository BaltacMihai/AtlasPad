<template>
  <div class="settings" v-show="isOpened">
    <div class="settings_header">
      <p class="title">Settings</p>
      <Button type="icon" @click="handleSettings">
        <img
          src="@/assets/icons/close.svg"
          alt="closing Icon"
          class="closeIcon"
        />
      </Button>
    </div>

    <div class="settings_container">
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
    </div>
  </div>
</template>
<script>
import Button from "../atoms/Button.vue";
import ResettableInput from "../molecules/ResettableInput.vue";
import LabeledInput from "../organisms/LabeledInput.vue";
import { useFileSettings } from "@/stores/FileSettings.js";

export default {
  components: { ResettableInput, LabeledInput, Button },
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
<style lang="scss">
.settings {
  height: fit-content;
  position: sticky;
  top: 10%;

  background-color: $cl-white;
  width: 20%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 1rem;
  border-radius: 10px;
  box-shadow: 0px 20px 20px rgba(134, 158, 253, 0.2);

  &_header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid $cl-grey;
    padding-bottom: 0.5rem;

    .title {
      font-size: $fs-subtitle;
      color: $cl-primary;
      font-weight: bold;
    }
  }
  &_container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding-top: 1rem;

    input {
      border: 1px solid $cl-primary !important;
    }
  }
}
</style>
