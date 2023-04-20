import generateTags from "./_generateTags";
import { saveAs } from "file-saver";

export default function exportHtmlFile(fileSettings, fileContent) {
  let compiledTags = "";

  console.log();

  //   Generate Header Of The HTML File
  const title =
    fileSettings.additionalInfo.title == null
      ? ""
      : `<title>${fileSettings.additionalInfo.title}</title>`;
  const charset =
    fileSettings.additionalInfo.meta.charset == null
      ? ""
      : `<meta charset="${fileSettings.additionalInfo.meta.charset}">`;
  const keywords =
    fileSettings.additionalInfo.meta.keywords == null
      ? ""
      : `<meta name="keywords" content="${fileSettings.additionalInfo.meta.keywords}">`;
  const description =
    fileSettings.additionalInfo.meta.description == null
      ? ""
      : `<meta name="description" content="${fileSettings.additionalInfo.meta.description}">`;
  const author =
    fileSettings.additionalInfo.meta.author == null
      ? ""
      : `<meta name="author" content="${fileSettings.additionalInfo.meta.author}">`;
  const viewport =
    fileSettings.additionalInfo.meta.viewport == null
      ? ""
      : `<meta name="viewport" content="${fileSettings.additionalInfo.meta.viewport}">`;

  //   Genertate the styles of the html
  const styleImports =
    fileSettings.additionalInfo.style.imports.length == 0
      ? ""
      : fileSettings.additionalInfo.style.imports;
  const styleCustom =
    fileSettings.additionalInfo.style.custom.length == 0
      ? ""
      : `<style>${fileSettings.additionalInfo.style.custom}</style>`;

  //   Genertate the scripts of the html
  const scriptHeadImports =
    fileSettings.additionalInfo.script.headImports.length == 0
      ? ""
      : fileSettings.additionalInfo.script.headImports;
  const scriptBodyImports =
    fileSettings.additionalInfo.script.bodyImports.length == 0
      ? ""
      : fileSettings.additionalInfo.script.bodyImports;
  const scriptCustom =
    fileSettings.additionalInfo.script.custom.length == 0
      ? ""
      : `<script>${fileSettings.additionalInfo.script.custom}</script>`;

  fileContent?.forEach((tag) => {
    compiledTags += generateTags(tag);
  });

  const compileFileContent = `
  <!DOCTYPE html>
  <html>
    <head>
      ${title}
      ${charset}
      ${keywords}
      ${description}
      ${author}
      ${viewport}
      ${styleImports}
      ${styleCustom}
      ${scriptHeadImports}
    </head>
    <body>
      ${compiledTags}
      \n
      ${scriptBodyImports}
      ${scriptCustom}
    </body>
  </html>
`;

  const file = new Blob([compileFileContent], {
    type: "text/html;charset=utf-8",
  });

  saveAs(file, `${fileSettings.fileName}.html`);
}
