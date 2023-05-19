<template>
  <SideSheet title="Settings" :closing-action="handleCode" v-show="isOpened">
  </SideSheet>
</template>
<script>
import SideSheet from "../molecules/SideSheet.vue";
import { CodeEditor } from "simple-code-editor";
export default {
  components: { SideSheet, CodeEditor },
  props: {
    handleCode: Function,
    isOpened: Boolean,
  },
  data() {
    return {
      convertedCode: "",
    };
  },
};
</script>
<style lang=""></style>
