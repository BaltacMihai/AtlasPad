export default function createNewTag() {
  return {
    tagName: "section",
    tagSettings: {
      isMinimized: false,
      isTagSettingsOpened: false,
    },
    tagAttributes: {
      class: "",
      id: "",
      custom: "",
    },
    tagType: "container",
    content: [],
  };
}
