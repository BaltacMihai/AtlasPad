import exportHTMLTag from "./exportHTMLTag";
import { saveAs } from "file-saver";

export default function exportHtmlFile(fileTitle, fileSettings, fileContent) {
  let compiledTags = "";

  //   Generate Header Of The HTML File
  const title =
    fileSettings.title == null
      ? "<title>Auto generated</title>"
      : `<title>${fileSettings.title}</title>`;
  const charset =
    fileSettings.meta.charset == null
      ? ""
      : `<meta charset="${fileSettings.meta.charset}">`;
  const keywords =
    fileSettings.meta.keywords == null
      ? ""
      : `<meta name="keywords" content="${fileSettings.meta.keywords}">`;
  const description =
    fileSettings.meta.description == null
      ? ""
      : `<meta name="description" content="${fileSettings.meta.description}">`;
  const author =
    fileSettings.meta.author == null
      ? ""
      : `<meta name="author" content="${fileSettings.meta.author}">`;
  const viewport =
    fileSettings.meta.viewport == null
      ? ""
      : `<meta name="viewport" content="${fileSettings.meta.viewport}">`;

  //   Genertate the styles of the html
  const styleImports =
    fileSettings.imports.style.length == 0 ? "" : fileSettings.imports.style;
  const styleCustom =
    fileSettings.custom.style.length == 0
      ? ""
      : `<style>${fileSettings.custom.style}</style>`;

  //   Genertate the scripts of the html
  const scriptHeadImports =
    fileSettings.imports.scriptHead.length == 0
      ? ""
      : fileSettings.imports.scriptHead;
  const scriptBodyImports =
    fileSettings.imports.scriptBody.length == 0
      ? ""
      : fileSettings.imports.scriptBody;
  const scriptCustom =
    fileSettings.custom.script.length == 0
      ? ""
      : `<script>${fileSettings.custom.script}</script>`;

  fileContent?.forEach((tag) => {
    compiledTags += exportHTMLTag(tag);
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

  saveAs(file, `${fileTitle}.html`);
}
