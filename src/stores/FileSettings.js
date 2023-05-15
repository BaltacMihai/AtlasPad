import { defineStore } from "pinia";

export const useFileSettings = defineStore("fileSettings", {
  state: () => ({
    fileName: "New Page",
    fileType: "mdx",
  }),
  actions: {
    updateSettings(newSettings) {
      // use Vue's `Object.assign()` method to update the state with the new settings
      Object.assign(this.$state, newSettings);
    },
    defalutValue() {
      Object.assign(this.$state, {
        fileName: "New Page",
        fileType: "mdx",
      });
    },
  },
});
