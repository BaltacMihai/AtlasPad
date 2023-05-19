import renderCodeSnippetContent from "./custom/CodeSnippet";

export default function generateTags(tag, depth = 0) {
  const indent = " ".repeat(depth);

  const generateTag = (name, attributes = "", content = "") =>
    `${indent}<${name}${generateTagAttributesString(
      attributes
    )}>${content}</${name}>\n`;

  if (tag.settings.type === "Custom") {
    switch (tag.settings.name) {
      case "CodeSnippet":
        return generateTag(
          tag.settings.name,
          tag.attributes,
          ` content="${renderCodeSnippetContent(tag.content)}"`
        );
    }
  }

  switch (tag.settings.contentType) {
    case "singleTag":
      return generateTag(tag.settings.name, tag.attributes);

    case "text":
    case "link":
      return generateTag(tag.settings.name, tag.attributes, `${tag.content}`);

    case "media":
      return generateTag(tag.settings.name, tag.attributes, " ");

    case "container":
      const generatedContent = tag.content
        ?.map((tagChild) => generateTags(tagChild, depth + 2))
        .join("");
      return generateTag(
        tag.settings.name,
        tag.attributes,
        `\n${generatedContent}${indent}`
      );
  }
}

function generateTagAttributesString(attributes) {
  const attributesList = [];
  for (const [key, value] of Object.entries(attributes)) {
    if (value && key != "custom") {
      attributesList.push(`${key}=\"${value}\"`);
    }
  }
  if (attributes.custom) {
    attributesList.push(attributes.custom);
  }

  if (attributesList.length != 0) {
    return " " + attributesList.join(" ");
  } else return "";
}
