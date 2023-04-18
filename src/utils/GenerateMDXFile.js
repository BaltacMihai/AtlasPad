import compileJsonToMDX from "./CompileJson2MDX";
import { saveAs } from "file-saver";

export default function generateMdxFile(tag, fileSettings, fileExtension) {
  const contentCompiled = compileJsonToMDX(tag);

  const file = new Blob([fileSettings.frontMatter + contentCompiled], {
    type: "text/plain;charset=utf-8",
  });

  saveAs(file, `${fileSettings.name}.${fileExtension}`);
}
