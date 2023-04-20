export default function generateTags(tag, depth = 0) {
  const indent = " ".repeat(depth);

  switch (tag.tagType) {
    case "selfClose":
      return `${indent}<${tag.tagName} ${tag.tagAttributes}/>\n`;

    case "text":
      return `${indent}<${tag.tagName} ${tag.tagAttributes}> ${tag.content}</${tag.tagName}>\n`;

    case "container":
      return `${indent}<${tag.tagName} ${tag.tagAttributes}> \n${tag.content
        ?.map((tagChild) => generateTags(tagChild, depth + 2))
        .join("")}\n${indent} </${tag.tagName}> \n`;
  }
}
