<!-- <Input v-model="name" id="name" /> -->

<template>
  <input
    class="input"
    :value="modelValue"
    @input="handleInput"
    :readonly="readonly"
    :placeholder="placeholder"
  />
</template>
<script>
export default {
  model: {
    prop: "modelValue",
    event: "input",
  },
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    readonly: {
      type: Boolean,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
  },
  methods: {
    handleInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>
<style lang="scss">
.input {
  font-size: $fs-text;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  border: none;
  background: $cl-white;
  color: $cl-black;

  &:focus-visible {
    outline: none;
  }
}
</style>
