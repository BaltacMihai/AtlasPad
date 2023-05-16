<template>
  <div class="tooltip" @mouseenter="showTooltip" @mouseleave="hideTooltip">
    <!-- Tooltip content -->
    <p v-show="isTooltipVisible" class="tooltip-content">{{ text }}</p>
    <span class="tooltip-trigger">
      <!-- Element triggering the tooltip, e.g., a button or an icon -->
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isTooltipVisible: false,
    };
  },
  props: {
    text: String,
  },
  methods: {
    showTooltip() {
      this.isTooltipVisible = true;
    },
    hideTooltip() {
      this.isTooltipVisible = false;
    },
  },
};
</script>

<style lang="scss">
.tooltip {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tooltip-trigger {
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
}

.tooltip-content {
  /* Styles for the tooltip content */
  position: absolute;
  background: $cl-black;
  color: $cl-white;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  width: max-content;
  margin: 2rem 0px;
  font-size: $fs-subtext;
  letter-spacing: 0.75px;

  right: 0;
  top: 0;
}
</style>
