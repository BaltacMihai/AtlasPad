<template>
  <TextareaInput
    label-name=""
    inputFor="content"
    placeholder="Content"
    :value="tag"
  />
</template>

<script>
import TextareaInput from "@/components/partials/Inputs/TextareaInput.vue";

export default {
  props: {
    tag: Object,
  },
  components: {
    TextareaInput,
  },
};
</script>
