import { saveAs } from "file-saver";

export default function exportMdFile(fileSettings, fileContent) {
  let compiledFileContent = "";
  fileContent.content.forEach((tag) => {
    switch (tag.tagName) {
      case "h1":
        compiledFileContent += `# ${tag.content}\n\n`;

        break;

      case "h2":
        compiledFileContent += `## ${tag.content}\n\n`;
        break;

      case "h3":
        compiledFileContent += `### ${tag.content}\n\n`;
        break;

      case "p":
        compiledFileContent += `${tag.content}\n\n`;
        break;

      //   case "ul":
      //     const listItems = Array.from(tag.children).map((li) =>
      //       li.textContent.trim()
      //     );
      //     compiledFileContent +=
      //       listItems.map((item) => `- ${item}`).join("\n") + "\n\n";
      //     break;

      //   case "img":
      //     const altText = tag.getAttribute("alt") || "";
      //     const src = tag.getAttribute("src") || "";
      //     compiledFileContent += `![${altText}](${src})\n\n`;
      //     break;

      case "code":
        compiledFileContent += `\`\`\`\n${tag.content}\n\`\`\`\n\n`;
        break;

      case "b":
        compiledFileContent += `**${tag.content}**\n\n`;
        break;

      case "i":
        compiledFileContent += `_${tag.content}_\n\n`;
        break;

      //   case "a":
      //     const href = tag.getAttribute("href") || "";
      //     const linkText = tag.textContent.trim();
      //     compiledFileContent += `[${linkText}](${href})\n\n`;
      //     break;

      case "blockquote":
        const blockquoteContent = tag.content.split("\n").join(`\n> `);
        compiledFileContent += `> ${blockquoteContent}\n\n`;

        // compiledFileContent += `> ${tag.content}\n\n`;
        break;

      default:
        // Ignore other tags
        break;
    }
  });
  console.log(compiledFileContent);

  const file = new Blob([compiledFileContent], {
    type: "text/md;charset=utf-8",
  });

  saveAs(file, `${fileSettings.fileName}.md`);
}
