<template>
  <div class="tag-card_header">
    <div class="info">
      <!-- <img :src="generateTagIcon" alt="containerIcon" /> -->
      <div class="description">
        <p class="title">{{ name }}</p>
        <p class="subtitle" v-html="subtitle"></p>
      </div>
    </div>
    <div class="actions">
      <TooltipButton
        tooltipText="Maximize the tag"
        type="icon"
        @click="minimTag"
        v-if="isMinimized"
      >
        <img src="@/assets/icons/maximize.svg" alt="textIcon" />
      </TooltipButton>

      <TooltipButton
        tooltipText="Minimize the tag"
        type="icon"
        @click="minimTag"
        v-else
      >
        <img src="@/assets/icons/minimized.svg" alt="textIcon" />
      </TooltipButton>

      <TooltipButton tooltipText="Tag Settings" type="icon">
        <img src="@/assets/icons/setting.svg" alt="textIcon" />
      </TooltipButton>
      <TooltipButton tooltipText="Delete Tag" type="icon" @click="deleteTag">
        <img src="@/assets/icons/trash.svg" alt="textIcon" />
      </TooltipButton>
    </div>
  </div>
</template>
<script>
import TooltipButton from "../molecules/TooltipButton.vue";
export default {
  components: { TooltipButton },
  props: {
    name: String,
    attributes: Object,
    minim: Function,
    isMinimized: Boolean,
    settings: Function,
    delete: Function,
  },
  computed: {
    subtitle() {
      let result = "";

      if (this.attributes.id) {
        result += `<span>ID</span>: ${this.attributes.id} <span>|</span> `;
      }

      if (this.attributes.class) {
        result += `<span>Class</span>: ${this.attributes.class} `;
      }

      if (this.attributes.custom) {
        const customAttributes = this.attributes.custom.split(" ");

        customAttributes.forEach((attribute) => {
          result += ` <span>|</span> `;
          const [key, value] = attribute.split("=");
          if (key && value) result += `<span>${key}</span>: ${value} `;
          else {
            const [key, value] = attribute.split(":");
            result += `<span>${key}</span>: ${value} `;
          }
        });
      }

      return result.trim();
    },
  },
  methods: {
    deleteTag() {
      this.delete();
    },
    minimTag() {
      this.minim();
    },
  },
};
</script>
<style lang="scss">
.tag-card_header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  background-color: #e8f2fd;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  cursor: grab;
  .info {
    display: flex;
    align-items: center;
    .description {
      .title {
        color: $cl-primary;
        font-weight: bold;
        font-size: $fs-title;
        text-transform: capitalize;
      }
      .subtitle {
        color: $cl-secondary;
        font-size: $fs-text;

        span {
          font-weight: bold;
        }
      }
    }
  }
  .actions {
    display: none;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  &:hover {
    .actions {
      display: flex;
    }
  }
}
</style>
