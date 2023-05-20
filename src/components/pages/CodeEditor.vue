<template>
  <SideSheet
    title="Code Editor"
    :closing-action="handleCode"
    v-show="isOpened"
    class="codeEditor"
  >
    <div class="code-header">
      <p class="label">Code</p>
      <TooltipButton
        tooltipText="Update the document"
        type="icon"
        v-if="itsModified"
        @click="refreshContent"
      >
        <img src="@/assets/icons/refresh.svg" alt="" />
      </TooltipButton>
    </div>
    <VueCodemirror
      v-model="intialCode"
      :extensions="[extensions]"
      :autoFocus="true"
      :lineNumbers="false"
      placeholder="Code goes here..."
      :style="{ height: '400px' }"
    />
    <p v-show="haveError" class="error">*The code have errors</p>
  </SideSheet>
</template>
<script>
import SideSheet from "../molecules/SideSheet.vue";
import { html } from "~@codemirror/lang-html";
import { oneDark } from "~@codemirror/theme-one-dark";
import TooltipButton from "../molecules/TooltipButton.vue";
import handleVModel from "@/mixins/handleVModel";
import exportHTMLTag from "@/data/export/exportHTMLTag.js";
import htmlToJson from "../../data/import/importHTML";

export default {
  mixins: [handleVModel],

  components: { SideSheet, TooltipButton },
  props: {
    handleCode: Function,
    isOpened: Boolean,
  },

  watch: {
    convertedCode(newValue) {
      // A method to verify if it have an error
      this.haveError = false;
      if (this.intialCode != newValue) this.itsModified = true;
      else this.itsModified = false;
    },
  },
  methods: {
    refreshContent() {
      try {
        this.propModel = JSON.parse(htmlToJson(this.convertedCode));
      } catch (error) {
        this.haveError = true;
        console.log(error);
      }
    },
  },
  computed: {
    intialCode: {
      get() {
        let compiledTags = "";

        this.modelValue?.forEach((tag) => {
          compiledTags += exportHTMLTag(tag);
        });

        return compiledTags;
      },
      // setter
      set(newValue) {
        this.convertedCode = newValue;
      },
    },
  },
  data() {
    return {
      extensions: [html(), oneDark],
      haveError: false,
      itsModified: false,
      convertedCode: "",
    };
  },
};
</script>
<style lang="scss">
.codeEditor {
  min-width: 40% !important;
  width: auto;
  max-width: 100%;

  .code-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .label {
      font-size: 16px;
      color: #3252cb;
      font-weight: bold;
    }
    .tooltip-content {
      bottom: 0;
      top: unset;
    }
  }

  .cm-editor {
    height: 70vh;

    *::-webkit-scrollbar {
      width: 3px;
      height: 3px;
      border-radius: 10px;

      &-track {
        background: #aabbff;
      }
      &-thumb {
        background: $cl-primary;
      }
    }
  }

  .error {
    font-size: $fs-subtext;
    margin-top: -1rem;
    color: red;
  }
}
</style>
