import { saveAs } from "file-saver";
import generateSimpleMDContent from "./_generateSimpleMDContent";

export default function exportMdFile(fileSettings, fileContent) {
  let compiledFileContent = "";

  fileContent.content.forEach((tag) => {
    switch (tag.tagName) {
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

  saveAs(file, `${fileSettings.fileName}.md`);
}
