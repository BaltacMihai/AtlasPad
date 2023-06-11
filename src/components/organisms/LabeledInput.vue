<!-- <LabeledInput
label-name="File name"
v-model="inputValue"
inputType="simple"
/> -->
<template>
  <div class="input-group">
    <label>{{ labelName }}</label>
    <component
      :is="inputBuilder"
      v-model="propModel"
      :options="options"
      :placeholder="placeholder"
    />
    <p class="subtext" v-if="subtext">{{ subtext }}</p>
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";
import handleVModel from "@/mixins/handleVModel";
export default {
  mixins: [handleVModel],
  props: {
    labelName: String,
    inputType: String,
    subtext: {
      type: String,
      required: false,
    },
    options: {
      type: Array,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
  },
  computed: {
    inputBuilder() {
      switch (this.inputType) {
        case "simple":
        case "Simple":
          return defineAsyncComponent(() => import("./../atoms/Input.vue"));

        case "ResettableInput":
        case "resettableInput":
          return defineAsyncComponent(() =>
            import("./../molecules/ResettableInput.vue")
          );

        case "Chip":
        case "chip":
          return defineAsyncComponent(() => import("./../atoms/Chips.vue"));

        case "Switch":
        case "switch":
          return defineAsyncComponent(() => import("./../atoms/Switch.vue"));

        case "Select":
        case "select":
          return defineAsyncComponent(() =>
            import("./../molecules/Select.vue")
          );
        case "Textarea":
        case "textarea":
          return defineAsyncComponent(() => import("./../atoms/Textarea.vue"));

        case "CustomSwitch":
        case "customSwitch":
          return defineAsyncComponent(() =>
            import("./../molecules/CustomSwitch.vue")
          );
      }
    },
  },
};
</script>
<style lang="scss">
.input-group {
  display: flex;
  flex-direction: column;
  width: fit-content;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  label {
    font-size: $fs-text;
    color: $cl-primary;
    font-weight: bold;
  }
  .subtext {
    font-size: $fs-subtext;
  }
}
</style>
