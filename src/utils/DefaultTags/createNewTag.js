export default function createNewTag(fileType) {
  if (fileType != "md")
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
  else
    return {
      tagName: "h1",
      tagSettings: {
        isMinimized: false,
        isTagSettingsOpened: true,
        isCustomTag: false,
      },
      tagAttributes: {
        class: "",
        id: "",
        custom: "",
      },
      tagType: "text",
      content: [],
    };
}
