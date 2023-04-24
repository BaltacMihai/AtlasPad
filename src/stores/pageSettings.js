import mdxDefaultTemplate from "@/utils/FileSettingsTemplate/MDX.json";
import { defineStore } from "pinia";

export const usePageSettings = defineStore("pageSettings", {
  state: () => ({
    fileName: "New Page",
    fileType: "mdx",
    additionalInfo: mdxDefaultTemplate,
  }),
  //   getters: {
  //     doubleCount: (state) => state.count * 2,
  //   },
  //   actions: {
  //     increment() {
  //       this.count++;
  //     },
  //   },
});
