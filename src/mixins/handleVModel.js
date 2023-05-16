export default {
  props: {
    modelValue: String,
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
