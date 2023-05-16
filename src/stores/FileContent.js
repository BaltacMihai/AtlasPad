import { defineStore } from "pinia";
import { useFileSettings } from "@/stores/FileSettings";

export const useFileContent = defineStore("fileContent", {
  state: () => ({
    tag: {
      settings,
    },
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
