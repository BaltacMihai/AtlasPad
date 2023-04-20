import { saveAs } from "file-saver";

export default function generateJsonFile(fileSettings, content) {
  const createdJson = {
    pageSettings: fileSettings,
    pageContent: content,
  };

  const file = new Blob([JSON.stringify(createdJson)], {
    type: "application/json",
  });

  saveAs(file, `${fileSettings.fileName}.json`);
}
