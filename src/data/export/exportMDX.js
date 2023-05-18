import exportHTMLTag from "./exportHTMLTag";
import { saveAs } from "file-saver";

export default function exportMdxFile(fileTitle, fileSettings, fileContent) {
  let compiledTags = "";

  const frontMatter = fileSettings.frontMatter;
  const imports = fileSettings.imports;
  const variables = fileSettings.variable;

  fileContent?.forEach((tag) => {
    compiledTags += exportHTMLTag(tag);
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

  saveAs(file, `${fileTitle}.mdx`);
}

function comment(text) {
  return `\n\n{/* ${text} Content */}\n\n`;
}
