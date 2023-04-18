<template>
  <input v-model="tag.tagAttributes" />
</template>

<script>
export default {
  props: {
    tag: Object,
  },
  methods: {
    onDelete() {
      this.$emit("delete", this.tag);
    },
  },
};
</script>
