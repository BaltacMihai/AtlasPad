<template>
  <div class="settings">
    <div class="settings_header">
      <p class="title">Settings</p>
      <img
        src="@/assets/icons/close.svg"
        alt="closing Icon"
        class="closeIcon"
      />
    </div>

    <div class="settings_container">
      <LabeledInput
        label-name="File name"
        v-model="pageSettings.fileName"
        inputType="resettableInput"
      />
    </div>
  </div>
</template>
<script>
import ResettableInput from "../molecules/ResettableInput.vue";
import LabeledInput from "../organisms/LabeledInput.vue";
import { useFileSettings } from "@/stores/FileSettings.js";

export default {
  components: { ResettableInput, LabeledInput },
  data() {
    return {
      pageSettings: useFileSettings(),
    };
  },
};
</script>
<style lang="scss">
.settings {
  background-color: $cl-white;
  width: fit-content;
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
    gap: 1rem;
    padding-top: 1rem;

    input {
      border: 1px solid $cl-primary !important;
    }
  }
}
</style>
