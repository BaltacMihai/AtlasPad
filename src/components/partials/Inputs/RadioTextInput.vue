<!-- Complex Component that have a Radio input and a Text input -->
<template>
  <div>
    <RadioInput
      :labelName="labelName"
      :optionsText="[optionsText[0], optionsText[1]]"
      :value="!isDefault"
      :change="toggleOption"
    />
    <TextInput
      labelName=""
      :inputFor="inputFor"
      :placeholder="placeholder"
      :value="value"
      v-if="!isDefault"
    />
  </div>
</template>

<script>
import RadioInput from "@/components/partials/Inputs/RadioInput.vue";
import TextInput from "@/components/partials/Inputs/TextInput.vue";

export default {
  components: {
    RadioInput,
    TextInput,
  },
  props: {
    labelName: String,
    inputFor: String,
    optionsText: Array,
    value: Object,
    placeholder: String,
  },
  data() {
    return {
      isDefault: this.value[this.inputFor] != null ? false : true,
    };
  },
  methods: {
    toggleOption(newValue) {
      this.isDefault = !newValue;

      if (this.isDefault == true) {
        this.value[this.inputFor] = null;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
