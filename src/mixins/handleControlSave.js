import saveFile from "@/utils/saveFile";

export default {
  mounted() {
    window.addEventListener("keydown", this.handleKeyDown);
  },
  beforeDestroy() {
    window.removeEventListener("keydown", this.handleKeyDown);
  },
  methods: {
    handleKeyDown(event) {
      if (event.ctrlKey && event.key === "s") {
        event.preventDefault();
        // Handle Ctrl + S action here
        saveFile(this.fileSettings, this.additionalInfo, this.fileContent);
      }
    },
  },
};
