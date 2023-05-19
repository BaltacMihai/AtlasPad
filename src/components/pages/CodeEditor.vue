<template>
  <SideSheet
    title="Code Editor"
    :closing-action="handleCode"
    v-show="isOpened"
    class="codeEditor"
  >
    <VueCodemirror
      v-model="convertedCode"
      :extensions="[extensions]"
      :autoFocus="true"
      :lineNumbers="false"
      placeholder="Code goes here..."
    />
  </SideSheet>
</template>
<script>
import SideSheet from "../molecules/SideSheet.vue";
import { html } from "~@codemirror/lang-html";
import { oneDark } from "~@codemirror/theme-one-dark";
export default {
  components: { SideSheet },
  props: {
    handleCode: Function,
    isOpened: Boolean,
  },
  data() {
    return {
      convertedCode: `
      <div class="Class Something" id="IdSomething" data-s:'ceva' custom-data:'altceva'> 
        <div></div>
      </div> 
      <h1>Lalalalal</h1>
      <img src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-36703721.jpg"> `,
      extensions: [html(), oneDark],
    };
  },
};
</script>
<style lang="scss">
.codeEditor {
  min-width: 40% !important;
  width: auto;
  max-width: 100%;
}
</style>
