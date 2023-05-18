function getTagTemplate(fileType) {
  if (fileType !== "md") {
    return {
      settings: {
        name: "p",
        isMinimized: false,
        isSettingsOptionOpened: false,
        type: "Regular",
        contentType: "text",
      },
      attributes: {
        class: "",
        id: "",
        custom: "",
      },
      content: "",
    };
  } else {
    return {
      settings: {
        name: "p",
        isMinimized: false,
        isSettingsOptionOpened: false,
        type: "Regular",
        contentType: "text",
      },
      attributes: {
        class: "",
        id: "",
        custom: "",
      },
      content: "",
    };
  }
}

export default getTagTemplate;
