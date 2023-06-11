<template>
  <div class="sidesheet">
    <div class="sidesheet_header">
      <p class="sidesheet_header_title">{{ title }}</p>
      <Button
        type="icon"
        @click="closingAction"
        class="sidesheet_header_button"
      >
        <img
          src="@/assets/icons/close.svg"
          alt="closing Icon"
          class="closeIcon"
        />
      </Button>
    </div>
    <div class="sidesheet_content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import Button from "../atoms/Button.vue";

export default {
  components: { Button },

  props: {
    title: String,
    closingAction: Function,
  },
};
</script>
<style lang="scss">
.sidesheet {
  height: fit-content;
  position: sticky;
  top: 10%;

  background-color: $cl-white;
  width: 20%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 1rem;
  border-radius: 10px;
  box-shadow: 0px 20px 20px rgba(134, 158, 253, 0.2);

  &_header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid $cl-grey;
    padding-bottom: 0.5rem;

    &_title {
      font-size: $fs-subtitle;
      color: $cl-primary;
      font-weight: bold;
    }
  }
  &_content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding-top: 1rem;

    input {
      border: 1px solid $cl-primary !important;
    }
  }
}
</style>
