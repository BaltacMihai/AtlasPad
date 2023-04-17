<template>
  <component :is="componentName" :tag="tag" />
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
          return defineAsyncComponent(() => import("./SingleTag.vue"));
        case "text":
          return defineAsyncComponent(() => import("./ContentTag.vue"));
        case "container":
          return defineAsyncComponent(() => import("./ContainerTag.vue"));
      }
    },
  },
};
</script>
