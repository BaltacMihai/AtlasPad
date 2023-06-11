<template>
  <textarea v-model="propModel" :placeholder="placeholder"></textarea>
</template>
<script>
import handleVModel from "@/mixins/handleVModel";

export default {
  mixins: [handleVModel],
  props: {
    placeholder: {
      type: String,
      required: false,
    },
  },
};
</script>
<style lang="scss" scoped>
textarea {
  resize: vertical;
}
</style>
