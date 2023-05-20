export default (htmlElement) => {
  console.log(
    "🚀 ~ file: readCodeSnippet.js:2 ~ htmlElement:",
    htmlElement.attributes.lang.value
  );
  return {
    settings: {
      name: "CodeSnippet",
      isMinimized: false,
      isSettingsOptionOpened: false,
      type: "Custom",
      contentType: "text",
    },
    attributes: {
      id: htmlElement.id,
      class: htmlElement.classList.toString(),
      custom: `lang:'${htmlElement.attributes.lang.value}'`,
    },
    content: htmlElement.attributes.content.value,
  };
};
