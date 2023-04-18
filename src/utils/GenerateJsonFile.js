import { saveAs } from "file-saver";

export default function generateJsonFile(content, fileName) {
  const file = new Blob([JSON.stringify(content)], {
    type: "application/json",
  });
  console.log(file);
  saveAs(file, `${fileName}.json`);
}
