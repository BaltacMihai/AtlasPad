<template>
  <div class="tag">
    <p class="tag-title">{{ tag.tagName }}</p>
    <component :is="componentName" :tag="tag" @delete="deleteTag" />
    <img @click="onDelete" src="@/assets/icons/trash.svg" class="deleteIcon" />
    <!-- <button @click="clickItem">Show</button> -->
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  props: {
    tag: Object,
  },

  computed: {
    componentName() {
      switch (this.tag.tagType) {
        case "selfClose":
          return defineAsyncComponent(() => import("./_SingleTag.vue"));
        case "text":
          return defineAsyncComponent(() => import("./_ContentTag.vue"));
        case "container":
          return defineAsyncComponent(() => import("./_ContainerTag.vue"));
      }
    },
  },
  methods: {
    onDelete() {
      this.$emit("delete", this.tag);
    },
    deleteTag(tag) {
      console.log(tag);
      const index = this.tag.content.indexOf(tag);
      if (index !== -1) {
        this.tag.content.splice(index, 1);
      }
    },
    clickItem() {
      console.log(this.tag);
      return 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.tag {
  padding: 1.5rem;
  border: 1px solid #ded7fb;
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .tag-title {
    position: absolute;
    top: -1rem;
    left: 1rem;
    background: #fcfbfc;
    padding: 0 10px;
    color: #5d60ef;
    font-weight: bold;
  }

  .deleteIcon {
    display: none;
    width: 20px;
    position: absolute;
    top: -0.75rem;
    right: 1rem;
    background: #fcfbfc;
    padding: 0 0.5rem;

    &:hover {
      cursor: pointer;
    }
  }

  &:hover {
    & > .deleteIcon:last-child {
      display: block;
    }
  }
}
</style>
