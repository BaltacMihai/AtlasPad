import { saveAs } from "file-saver";

export default function generateJsonFile(content, fileSettings) {
  const createdJson = {
    pageSettings: {
      name: fileSettings.name,
      frontMatter: fileSettings.frontMatter,
    },
    pageContent: content,
  };

  const file = new Blob([JSON.stringify(createdJson)], {
    type: "application/json",
  });

  saveAs(file, `${fileSettings.name}.json`);
}
