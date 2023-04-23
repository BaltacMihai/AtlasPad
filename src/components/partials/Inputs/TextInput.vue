<template>
  <div class="input__group">
    <label :for="localId">{{ labelName }}</label>
    <input
      type="text"
      :id="localId"
      :name="localId"
      v-model="value[inputFor]"
      :placeholder="placeholder"
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
  },
  computed: {
    localId() {
      return generateId(this.labelName);
    },
  },
};
</script>
