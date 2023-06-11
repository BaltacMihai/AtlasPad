export default {
  mounted() {
    // Add the event listener when the component is mounted
    window.addEventListener("beforeunload", this.confirmExit);
  },
  beforeUnmount() {
    // Remove the event listener when the component is about to be unmounted
    window.removeEventListener("beforeunload", this.confirmExit);
  },
  methods: {
    confirmExit(event) {
      // Cancel the event as a fallback
      event.preventDefault();

      // Chrome requires a returnValue to be set
      event.returnValue = "";

      // Display a confirmation message
      return "Are you sure you want to leave? Your changes will not be saved.";
    },
  },
};
