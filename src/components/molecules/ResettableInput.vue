<!-- <ResettableInput v-model="inputValue" /> -->
<template>
  <div
    class="input-resetable"
    @focusin="inputFocus"
    @focusout="inputUnfocus"
    :class="{ focused: isDeleteIconVisible }"
  >
    <Input v-model="propModel" />
    <!-- <input class="input" :value="modelValue" @input="handleInput" ref="input" /> -->
    <Button
      type="icon"
      v-show="isDeleteIconVisible"
      @click="eraseContent"
      @mouseover="mouseOver"
      @mouseout="mouseOut"
    >
      <img src="@/assets/icons/close.svg" alt="closeIcon" />
    </Button>
  </div>
</template>
<script>
import Button from "../atoms/Button.vue";
import Input from "../atoms/Input.vue";
export default {
  components: { Button, Input },
  props: {
    modelValue: String,
  },
  data() {
    return {
      isDeleteIconVisible: false,
      isMouseOver: false,
    };
  },
  methods: {
    eraseContent() {
      this.$emit("update:modelValue", "");
      this.isDeleteIconVisible = false;
      // this.$refs.input.focus();
    },
    inputFocus() {
      this.isDeleteIconVisible = true;
    },
    inputUnfocus() {
      if (!this.isMouseOver) this.isDeleteIconVisible = false;
    },
    mouseOver() {
      this.isMouseOver = true;
    },
    mouseOut() {
      console.log("MOUSE OUT");
      this.isMouseOver = false;
    },
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
</script>
<style lang="scss">
.input-resetable {
  display: flex;
  align-items: center;
  width: fit-content;

  position: relative;
  input {
    border: 1px solid $cl-primary;
  }

  &.focused {
    input {
      padding-right: 3rem;
    }
  }

  .btn {
    position: absolute;
    right: 1rem;
  }
}
</style>
