<!-- <LabeledInput
label-name="File name"
v-model="inputValue"
inputType="simple"
/> -->
<template>
  <div class="input-group">
    <label>{{ labelName }}</label>
    <component :is="inputBuilder" v-model="propModel" />
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";
export default {
  props: {
    labelName: String,
    modelValue: String,
    inputType: String,
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
      }
    },
    propModel: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
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
  label {
    font-size: $fs-text;
    color: $cl-primary;
    font-weight: bold;
  }
}
</style>
