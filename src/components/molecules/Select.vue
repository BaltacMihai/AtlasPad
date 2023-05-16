<!-- <Select v-model="vmod" :options="['Option 1', 'Option 2', 'Option 3']" /> -->

<template>
  <div class="select">
    <div class="select-input" @click="triggerDropdown">
      <Input v-model="propModel" readonly />
      <Button type="icon" v-if="!isDropdownOpened">
        <img src="@/assets/icons/dropdown.svg" alt="dropdown" />
      </Button>
      <Button type="icon" v-else>
        <img src="@/assets/icons/dropdown-active.svg" alt="dropdownActive" />
      </Button>
    </div>

    <div class="select-content" v-show="isDropdownOpened">
      <template v-for="option in options">
        <div
          class="item"
          @click="selectOption"
          :data-option="option"
          :class="{ active: modelValue == option }"
        >
          {{ option }}
          <template v-if="modelValue == option">
            <img src="@/assets/icons/selected.svg" alt="" />
          </template>
        </div>
      </template>
    </div>

    <!-- dropdown-active.svg selected-box.svg -->
  </div>
</template>
<script>
import handleVModel from "@/mixins/handleVModel";
import Button from "../atoms/Button.vue";
import Input from "../atoms/Input.vue";

export default {
  components: { Input, Button },
  mixins: [handleVModel],
  props: {
    options: Array,
  },
  data() {
    return {
      isDropdownOpened: false,
    };
  },
  methods: {
    triggerDropdown() {
      this.isDropdownOpened = !this.isDropdownOpened;
    },
    selectOption(event) {
      this.$emit("update:modelValue", event.target.dataset.option);
      this.isDropdownOpened = !this.isDropdownOpened;
    },
  },
};
</script>
<style lang="scss">
.select {
  position: relative;

  width: 300px;

  display: flex;
  flex-direction: column;
  &-input {
    width: fit-content;
    display: flex;
    align-items: center;
    width: 100%;

    position: relative;
    input {
      border: 1px solid $cl-primary;
      padding-right: 3rem;
      width: 100%;
      cursor: pointer;
    }
    .btn {
      position: absolute;
      right: 1rem;
    }
  }

  &-content {
    margin-top: 0.5rem;
    border: 1px solid $cl-primary;
    border-radius: 10px;

    display: flex;
    flex-direction: column;

    .item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.5rem 1rem;

      &.active {
        background-color: $cl-secondary;
        &:first-child {
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }
        &:last-child {
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
        }
      }
      &:hover {
        background-color: lighten($cl-secondary, 10);
        cursor: pointer;

        &:first-child {
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }
        &:last-child {
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
        }
      }
    }
  }
}
</style>
