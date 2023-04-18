import compileJsonToMDX from "./CompileJson2MDX";
import { saveAs } from "file-saver";

export default function generateMdxFile(tag, fileName, fileExtension) {
  const contentCompiled = compileJsonToMDX(tag);

  const file = new Blob([contentCompiled], {
    type: "text/plain;charset=utf-8",
  });

  saveAs(file, `${fileName}.${fileExtension}`);
}
