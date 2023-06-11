import { saveAs } from "file-saver";

export default function exportMdFile(fileTitle, fileSettings, fileContent) {
  let compiledFileContent = "";

  fileContent.forEach((tag) => {
    switch (tag.settings.name) {
      case "ul":
        {
          const listContent = tag.content
            ?.map((childTag) => generateSimpleMDContent(childTag))
            .join("\n- ")
            .replace(/-\s+$/, ""); // remove trailing dash

          compiledFileContent += `- ${listContent} \n`;
        }
        break;

      case "ol":
        {
          const listContent = tag.content
            ?.map((childTag) => generateSimpleMDContent(childTag))
            .join("\n1. ")
            .replace(/-\s+$/, ""); // remove trailing dash

          compiledFileContent += `1. ${listContent} \n`;
        }
        break;
      case "blockquote":
        {
          const listContent = tag.content
            ?.map((childTag) => generateSimpleMDContent(childTag))
            .join("\n> ")
            .replace(/-\s+$/, ""); // remove trailing dash

          compiledFileContent += `> ${listContent} \n`;
        }

        break;

      case "code":
        compiledFileContent += `\`\`\`${tag.tagAttributes.lang}\n${tag.content}\n\`\`\``;
        break;

      case "inline content":
        {
          const listContent = tag.content
            ?.map((childTag) => generateSimpleMDContent(childTag))
            .join("  ");

          compiledFileContent += `${listContent} \n`;
        }
        break;

      default:
        compiledFileContent += generateSimpleMDContent(tag);
        compiledFileContent += "\n";
        break;
    }
  });
  console.log(compiledFileContent);

  const file = new Blob([compiledFileContent], {
    type: "text/md;charset=utf-8",
  });

  saveAs(file, `${fileTitle}.md`);
}

function generateSimpleMDContent(tag) {
  switch (tag.settings.name) {
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
      return `[${tag.content.trimEnd()}](${tag.attributes.src.trimEnd()} "${tag.attributes.title.trimEnd()}")`;

    case "img":
      return `![${tag.attributes.alt.trimEnd()}](${tag.attributes.src.trimEnd()} "${tag.attributes.title.trimEnd()}")`;

    case "code":
      return `\`${tag.content.trimEnd()}\``;
    case "line":
      return `--- \n`;
  }
}
