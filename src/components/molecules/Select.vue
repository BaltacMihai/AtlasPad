<!-- <Select v-model="vmod" :options="['Option 1', 'Option 2', 'Option 3']" /> -->

<template>
  <div class="select" ref="scrollContainer">
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
      <div class="scrollable">
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
      this.$nextTick(() => {
        this.scrollToSelected();
      });
    },
    selectOption(event) {
      this.$emit("update:modelValue", event.target.dataset.option);
      this.isDropdownOpened = !this.isDropdownOpened;
    },
    scrollToSelected() {
      const selectedElement =
        this.$refs.scrollContainer.querySelector(".active");

      if (selectedElement) {
        selectedElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "start",
          preventScroll: true,
        });
      }
    },
    handleClickOutside(event) {
      // Close the dropdown if the clicked element is outside of the dropdown component
      if (
        this.$refs.scrollContainer &&
        !this.$refs.scrollContainer.contains(event.target)
      ) {
        this.isDropdownOpened = false;
      }
    },
  },
  mounted() {
    // Add a click event listener to the document
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeUnmount() {
    // Clean up the event listener when the component is unmounted
    document.removeEventListener("click", this.handleClickOutside);
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
    position: absolute;
    top: 2.5rem;
    background: $cl-white;
    width: 100%;
    z-index: 2;

    margin-top: 0.5rem;
    border: 1px solid $cl-primary;
    border-radius: 10px;

    display: flex;
    flex-direction: column;

    .scrollable {
      &::-webkit-scrollbar {
        width: 3px;
        border-radius: 10px;

        &-track {
          background: #aabbff;
        }
        &-thumb {
          background: $cl-primary;
        }
      }
    }

    .item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.5rem 1rem;

      &.active {
        background-color: $cl-secondary;
      }
      &:hover {
        background-color: lighten($cl-secondary, 10);
        cursor: pointer;
      }
    }
  }
}
</style>
