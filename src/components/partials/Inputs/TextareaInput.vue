<template>
  <div class="input__group">
    <label :for="localId">{{ labelName }}</label>
    <textarea
      type="text"
      :id="localId"
      :name="localId"
      v-model="value[inputFor]"
      :placeholder="placeholder"
      :rows="initialHeight"
    />
  </div>
</template>
<script>
import generateId from "@/utils/GenerateId";
export default {
  props: {
    labelName: String,
    inputFor: String,
    placeholder: String,
    value: Object,
    initialHeight: String,
  },
  computed: {
    localId() {
      return generateId(this.labelName);
    },
  },
};
</script>
