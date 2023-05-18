<!-- <ResettableInput v-model="inputValue" /> -->
<template>
  <div
    class="input-resetable"
    @focusin="inputFocus"
    @focusout="inputUnfocus"
    :class="{ focused: isDeleteIconVisible }"
  >
    <Input v-model="propModel" :placeholder="placeholder" />
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
import handleVModel from "@/mixins/handleVModel";
import Button from "../atoms/Button.vue";
import Input from "../atoms/Input.vue";
export default {
  components: { Button, Input },
  mixins: [handleVModel],
  props: {
    placeholder: {
      type: String,
      required: false,
    },
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
};
</script>
<style lang="scss">
.input-resetable {
  display: flex;
  align-items: center;

  position: relative;

  input {
    width: 100%;
  }

  &.focused {
    margin-right: -2rem;
    input {
      padding-right: 3rem;
      width: calc(100% - 6.15rem);
    }
    .btn {
      position: absolute;
      right: 2.5rem;
    }
  }
}
</style>
