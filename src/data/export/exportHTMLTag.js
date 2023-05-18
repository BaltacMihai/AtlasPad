import renderCodeSnippetContent from "./custom/CodeSnippet";

export default function generateTags(tag, depth = 0) {
  const indent = " ".repeat(depth);

  if (tag.settings.type == "Custom") {
    switch (tag.settings.name) {
      case "CodeSnippet":
        return `${indent}<${tag.settings.name}${generateTagAttributesString(
          tag.attributes
        )} content="${renderCodeSnippetContent(tag.content)}"/>\n`;
    }
  }

  switch (tag.settings.contentType) {
    case "singleTag":
      return `${indent}<${tag.settings.name}${generateTagAttributesString(
        tag.attributes
      )}/>\n`;

    case "text":
      return `${indent}<${tag.settings.name}${generateTagAttributesString(
        tag.attributes
      )}> ${tag.content}</${tag.settings.name}>\n`;

    case "media":
      return `${indent}<${tag.settings.name}${generateTagAttributesString(
        tag.attributes
      )} src=${tag.content}> </${tag.settings.name}>\n`;

    case "link":
      return `${indent}<${tag.settings.name}${generateTagAttributesString(
        tag.attributes
      )}> ${tag.content}</${tag.settings.name}>\n`;

    case "container":
      return `${indent}<${tag.settings.name}${generateTagAttributesString(
        tag.attributes
      )}> \n${tag.content
        ?.map((tagChild) => generateTags(tagChild, depth + 2))
        .join("")}\n${indent} </${tag.settings.name}> \n`;
  }
}

function generateTagAttributesString(attributes) {
  const attributesList = [];
  for (const [key, value] of Object.entries(attributes)) {
    if (value && key != "custom") {
      attributesList.push(`${key}=\`${value}\``);
    }
  }
  if (attributes.custom) {
    attributesList.push(attributes.custom);
  }

  if (attributesList.length != 0) {
    return " " + attributesList.join(" ");
  } else return "";
}
