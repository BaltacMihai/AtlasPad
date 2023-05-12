<template>
  <nav>
    <div class="navbar_info">
      <img src="@/assets/icons/logo.svg" alt="logo" />
      <div class="infos">
        <p class="title">{{ text }}</p>
        <div class="type">MDX</div>
      </div>
    </div>
    <div class="navbar_actions">
      <TooltipButton tooltipText="Edit as Tags" type="icon">
        <img src="@/assets/icons/tag.svg" alt="tagIcon" />
      </TooltipButton>

      <TooltipButton tooltipText="Edit as Text" type="icon">
        <img src="@/assets/icons/text.svg" alt="textIcon" />
      </TooltipButton>
      <p class="vertical-line"></p>

      <TooltipButton tooltipText="See the Code" type="icon">
        <img src="@/assets/icons/code.svg" alt="codeIcon" />
      </TooltipButton>

      <TooltipButton tooltipText="See the Frontmatter" type="icon">
        <img src="@/assets/icons/book.svg" alt="settingsIcon" />
      </TooltipButton>
      <p class="vertical-line"></p>

      <TooltipButton tooltipText="Settings" type="icon">
        <img src="@/assets/icons/setting.svg" alt="settingsIcon" />
      </TooltipButton>

      <Button type="secondary">Save</Button>
      <Button type="primary">Export</Button>
    </div>
  </nav>
</template>
<script>
import Button from "../atoms/Button.vue";
import TooltipButton from "../molecules/TooltipButton.vue";

export default {
  components: { Button, TooltipButton },
  data() {
    return {
      text: "New Document",
    };
  },
};
</script>
<style lang="scss">
nav {
  background-color: $cl-primary;
  padding: 1rem;

  display: flex;
  justify-content: space-between;

  .navbar_info {
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      width: 50px;
    }
    .infos {
      display: flex;
      flex-direction: column;

      .title {
        font-size: $fs-title;
        color: $cl-white;
        font-weight: bold;
      }
      .type {
        font-size: $fs-text;
        color: $cl-light-grey;
      }
    }
  }

  .navbar_actions {
    display: flex;
    align-items: center;
    gap: 1rem;

    .vertical-line {
      border-right: 1px solid $cl-secondary;
      height: 60%;
    }
  }
}
</style>
