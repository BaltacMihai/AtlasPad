<!-- <Button disabled>Button</Button> -->
<!-- <Button type="primary">Button</Button>
  <Button type="secondary">Button</Button>
  <Button disabled type="primary">Button</Button>
  <Button disabled type="secondary">Button</Button> -->

<template>
  <div class="btn" :class="[{ disabled: disabled }, classes]">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    disabled: Boolean,
    type: String,
  },
  computed: {
    classes() {
      switch (this.type) {
        case "Primary":
        case "primary":
          return "btn-primary";
          break;

        case "Secondary":
        case "secondary":
          return "btn-secondary";
          break;

        case "Icon":
        case "icon":
          return "btn-icon";
          break;

        default:
          return "";
          break;
      }
    },
  },
};
</script>
<style lang="scss">
.btn {
  font-size: $fs-text;
  width: fit-content;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  &-primary {
    background-color: $cl-secondary;
    color: $cl-black;
  }
  &-secondary {
    color: $cl-secondary;
    border: 1px solid $cl-secondary;
  }
  &-icon {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:hover {
    opacity: 0.75;
    cursor: pointer;
  }
  &.disabled {
    opacity: 0.5;
    &:hover {
      cursor: not-allowed;
    }
  }
}
</style>
