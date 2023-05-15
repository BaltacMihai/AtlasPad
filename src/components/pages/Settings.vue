<template>
  <div class="settings">
    <div class="settings_header">
      <p class="title">Settings</p>
      <img src="" alt="closing Icon" class="closeIcon" />
    </div>

    <div class="settings_container"></div>
  </div>
</template>
<script>
import ResettableInput from "../molecules/ResettableInput.vue";
import LabeledInput from "../organisms/LabeledInput.vue";

export default {
  components: { ResettableInput, LabeledInput },
  data() {
    return {
      inputValue: "",
    };
  },
};
</script>
<style lang="scss">
input {
  border: 1px solid $cl-primary !important;
}
</style>
