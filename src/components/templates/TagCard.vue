<template>
  <div class="tag-card">
    <TagNavbar
      :name="tag.settings.name"
      :attributes="tag.attributes"
      :mini="() => {}"
      :settings="() => {}"
      :delete="onDelete"
    />
  </div>
</template>
<script>
import TooltipButton from "../molecules/TooltipButton.vue";
import TagNavbar from "../organisms/TagNavbar.vue";

export default {
  props: {
    tag: Object,
  },
  components: { TooltipButton, TagNavbar },
  methods: {
    onDelete() {
      this.$emit("delete", this.tag);
    },
  },
};
</script>
<style lang="scss">
.tag-card {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0px 20px 20px rgba(134, 158, 253, 0.2);

  &_header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;

    border-bottom: 1px solid $cl-grey;

    .info {
      .title {
        color: $cl-primary;
        font-weight: bold;
        font-size: $fs-title;
        text-transform: uppercase;
      }
      .subtitle {
        color: $cl-secondary;
        font-size: $fs-text;

        span {
          font-weight: bold;
        }
      }
    }
    .actions {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }
  }
}
</style>
