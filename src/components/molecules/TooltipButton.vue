<!-- <TooltipButton tooltipText="Edit as Tags" type="icon">
    <img src="@/assets/icons/tag.svg" alt="tagIcon" />
  </TooltipButton> -->

<template>
  <Tooltip :text="tooltipText">
    <Button :type="type">
      <slot></slot>
    </Button>
  </Tooltip>
</template>
<script>
import Button from "../atoms/Button.vue";
import Tooltip from "../atoms/Tooltip.vue";

export default {
  components: { Button, Tooltip },
  props: {
    tooltipText: String,
    type: String,
  },
};
</script>
<style lang=""></style>
