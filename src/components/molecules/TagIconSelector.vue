<template>
  <img :src="generateTagIcon" alt="" />
</template>
<script>
import containerImg from "@/assets/icons/container.svg";
import linkImg from "@/assets/icons/link.svg";
import mediaImg from "@/assets/icons/media.svg";
import singleTagImg from "@/assets/icons/singleTag.svg";
import textTagImg from "@/assets/icons/textTag.svg";
import customTagImg from "@/assets/icons/customTag.svg";

export default {
  props: {
    tagType: String,
    isCustomTag: Boolean,
  },
  computed: {
    generateTagIcon() {
      if (this.isCustomTag) return customTagImg;

      switch (this.tagType) {
        case "media":
          return mediaImg;
        case "text":
          return textTagImg;
        case "link":
          return linkImg;
        case "container":
          return containerImg;
        case "singleTag":
          return singleTagImg;
        default:
          return singleTagImg;
      }
    },
  },
};
</script>
<style lang=""></style>
