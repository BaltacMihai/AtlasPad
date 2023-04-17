import compileJsonToMDX from "./CompileJson2MDX";
import { saveAs } from "file-saver";

export default function generateMdxFile(tag) {
  const contentCompiled = compileJsonToMDX(tag);

  console.log(contentCompiled);

  const file = new Blob([contentCompiled], {
    type: "text/plain;charset=utf-8",
  });

  //   saveAs(file, "content.txt");
}
