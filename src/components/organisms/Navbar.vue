<template>
  <nav>
    <div class="navbar_info">
      <img src="@/assets/icons/logo.svg" alt="logo" />
      <div class="infos">
        <Input v-model="pageSettings.fileName" id="fileName" />
        <div class="type">{{ pageSettings.fileType.toUpperCase() }}</div>
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

      <TooltipButton
        tooltipText="See the Frontmatter"
        type="icon"
        @click="handleAdditionalInfo"
      >
        <img src="@/assets/icons/book.svg" alt="settingsIcon" />
      </TooltipButton>
      <p class="vertical-line"></p>

      <TooltipButton tooltipText="Settings" type="icon" @click="handleSettings">
        <img src="@/assets/icons/setting.svg" alt="settingsIcon" />
      </TooltipButton>

      <Button type="secondary">Save</Button>
      <Button type="primary">Export</Button>
    </div>
  </nav>
</template>
<script>
import Button from "../atoms/Button.vue";
import Input from "../atoms/Input.vue";
import TooltipButton from "../molecules/TooltipButton.vue";
import { useFileSettings } from "@/stores/FileSettings.js";

export default {
  components: { Button, TooltipButton, Input, Input },
  props: {
    handleSettings: Function,
    handleAdditionalInfo: Function,
  },
  data() {
    return {
      pageSettings: useFileSettings(),
    };
  },
};
</script>
<style lang="scss">
nav {
  $padding-size: 1rem;

  background-color: $cl-primary;
  padding: $padding-size;

  display: flex;
  justify-content: space-between;

  position: sticky;
  top: 0;

  z-index: 999;

  .navbar_info {
    display: flex;
    align-items: center;
    gap: $padding-size;

    img {
      width: 50px;
    }
    .infos {
      display: flex;
      flex-direction: column;

      #fileName {
        font-size: $fs-title;
        color: $cl-white;
        font-weight: bold;

        // Overwrite
        background: transparent;
        padding: 0;
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
    gap: $padding-size;

    .vertical-line {
      border-right: 1px solid $cl-secondary;
      height: 60%;
    }
  }
}
</style>
