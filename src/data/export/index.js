import exportHtmlFile from "./exportHTML";
import exportMdFile from "./exportMD";
import exportMdxFile from "./exportMDX";

export default function exportFile(settings, fileSettings, fileContent) {
  switch (settings.fileType) {
    case "html":
      exportHtmlFile(settings.fileName, fileSettings, fileContent);
      break;
    case "mdx":
      exportMdxFile(settings.fileName, fileSettings, fileContent);
      break;

    case "md":
      exportMdFile(settings.fileName, fileSettings, fileContent);
      break;
  }
}
