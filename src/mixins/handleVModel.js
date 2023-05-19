export default {
  props: {
    modelValue: [String, Array],
  },
  computed: {
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
