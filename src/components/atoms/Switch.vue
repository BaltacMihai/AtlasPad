<!-- <Switch :options="['Regular', 'Custom']" v-model="vmod" /> -->

<template>
  <div class="switch">
    <template v-for="option in options">
      <div
        class="option"
        :class="{ active: option == modelValue }"
        @click="handleSwitch"
        :data-option="option"
      >
        {{ option }}
      </div>
    </template>
  </div>
</template>
<script>
export default {
  model: {
    prop: "modelValue",
    event: "input",
  },
  props: {
    options: Array,
    modelValue: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleSwitch(event) {
      this.$emit("update:modelValue", event.target.dataset.option);
    },
  },
};
</script>
<style lang="scss">
.switch {
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;

  border: 1px solid $cl-primary;
  border-radius: 10px;

  .option {
    padding: 0.5rem 1rem;
    color: $cl-primary;
    font-size: $fs-text;

    cursor: pointer;

    &.active {
      background-color: $cl-primary;
      color: $cl-white;

      border-radius: 10px;
    }
  }
}
</style>
