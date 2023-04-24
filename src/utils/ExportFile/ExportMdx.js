import generateTags from "./_generateTags";
import { saveAs } from "file-saver";

export default function exportMdxFile(fileSettings, fileContent) {
  let compiledTags = "";

  const frontMatter = fileSettings.additionalInfo.frontMatter;
  const imports = fileSettings.additionalInfo.imports;
  const variables = fileSettings.additionalInfo.variables;

  fileContent.content?.forEach((tag) => {
    compiledTags += generateTags(tag);
  });

  const compileFileContent =
    frontMatter +
    comment("Imports") +
    imports +
    comment("Variables & Components") +
    variables +
    comment("Page") +
    compiledTags;

  const file = new Blob([compileFileContent], {
    type: "text/plain;charset=utf-8",
  });

  saveAs(file, `${fileSettings.fileName}.mdx`);
}

function comment(text) {
  return `\n\n{/* ${text} Content */}\n\n`;
}
