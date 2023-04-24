export default function generateSimpleMDContent(tag) {
  switch (tag.tagName) {
    case "h1":
      return `# ${tag.content.trimEnd()}`;

    case "h2":
      return `## ${tag.content.trimEnd()}`;

    case "h3":
      return `### ${tag.content.trimEnd()}`;

    case "p":
      return `${tag.content.trimEnd()}`;

    case "bold":
      return `**${tag.content.trimEnd()}**`;

    case "italic":
      return `_${tag.content.trimEnd()}_`;

    case "scratch":
      return `~~${tag.content.trimEnd()}~~`;

    case "a":
      return `[${tag.content.trimEnd()}](${tag.tagAttributes.src.trimEnd()} "${tag.tagAttributes.title.trimEnd()}")`;

    case "img":
      return `![${tag.tagAttributes.alt.trimEnd()}](${tag.tagAttributes.src.trimEnd()} "${tag.tagAttributes.title.trimEnd()}")`;

    case "code":
      return `\`${tag.content.trimEnd()}\``;
    case "line":
      return `--- \n`;
  }
}
