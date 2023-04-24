import mdxDefaultTemplate from "@/utils/FileSettingsTemplate/MDX.json";
import { defineStore } from "pinia";

export const usePageSettings = defineStore("pageSettings", {
  state: () => ({
    fileName: "New Page",
    fileType: "mdx",
    additionalInfo: mdxDefaultTemplate,
  }),
  actions: {
    updateSettings(newSettings) {
      // use Vue's `Object.assign()` method to update the state with the new settings
      Object.assign(this.$state, newSettings);
    },
    defalutValue() {
      Object.assign(this.$state, {
        fileName: "New Pages",
        fileType: "mdx",
        additionalInfo: [],
      });
    },
  },
});
