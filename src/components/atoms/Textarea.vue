<template>
  <textarea v-model="propModel"></textarea>
</template>
<script>
import handleVModel from "@/mixins/handleVModel";

export default {
  mixins: [handleVModel],
};
</script>
<style lang="scss" scoped>
textarea {
  resize: vertical;
}
</style>
