<template>
  <div class="chips">
    <template v-for="option in options">
      <div
        class="chip"
        :class="{ active: modelValue == option }"
        :data-option="option"
        @click="changeChip"
      >
        <template v-if="modelValue == option">
          <img src="@/assets/icons/selected.svg" alt="" />
        </template>
        {{ option.toUpperCase() }}
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
    modelValue: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
  },
  methods: {
    changeChip(event) {
      this.$emit("update:modelValue", event.target.dataset.option);
    },
  },
};
</script>
<style lang="scss">
.chips {
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0.5rem;
  flex-wrap: wrap;

  .chip {
    padding: 0.5rem 1rem;
    border-radius: 50rem;
    color: $cl-primary;
    border: 1px solid $cl-primary;
    font-size: $fs-text;

    display: flex;
    gap: 0.5rem;

    &:hover {
      cursor: pointer;
      background-color: lighten($cl-secondary, 10);
    }

    &.active {
      background-color: $cl-secondary;
      font-weight: bold;
    }
  }
}
</style>
