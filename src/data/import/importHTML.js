import getDefaultTags from "@/data/TagsPredefined.js";

export default function htmlToJson(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  function parseElement(element) {
    const defaultTags = getDefaultTags("html");
    const tagContentType = defaultTags.find(
      (t) => t.name === element.tagName.toLowerCase()
    );
    let contentType;
    if (tagContentType) {
      contentType = tagContentType.type == "container" ? [] : "";
    }

    const tag = {
      settings: {
        name: element.tagName.toLowerCase(),
        isMinimized: false,
        isSettingsOptionOpened: true,
        type: tagContentType ? "Regular" : "Custom",
        contentType: tagContentType ? tagContentType.type : "container",
      },
      attributes: {
        id: element.id,
        class: element.classList.toString(),
        custom: "",
        src: tagContentType
          ? tagContentType.type == "media"
            ? element.src
            : ""
          : "",
      },
      content: tagContentType ? contentType : [],
    };

    const attributes = element.attributes;
    for (let i = 0; i < attributes.length; i++) {
      const attribute = attributes[i];

      if (attribute.name.toLowerCase().includes("data")) {
        if (tag.attributes.custom.length > 0) tag.attributes.custom += " ";

        tag.attributes.custom += attribute.name;
      }
    }

    const childNodes = element.childNodes;
    for (let i = 0; i < childNodes.length; i++) {
      const child = childNodes[i];
      if (child.nodeType === Node.TEXT_NODE) {
        const textContent = child.textContent.trim();
        if (textContent) {
          tag.content = textContent;
        }
      } else if (child.nodeType === Node.ELEMENT_NODE) {
        if (tag.content) tag.content?.push(parseElement(child));
      }
    }

    return tag;
  }

  let jsonCreated = [];

  doc.body.children?.forEach((element) => {
    jsonCreated.push(parseElement(element));
  });

  return JSON.stringify(jsonCreated, null, 2);
}
