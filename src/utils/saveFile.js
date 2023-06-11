import { saveAs } from "file-saver";

export default function saveFile(
  fileSettings,
  fileAdditionalInfo,
  fileContent
) {
  const createdJson = {
    fileSettings,
    fileAdditionalInfo,
    fileContent,
  };
  const file = new Blob([JSON.stringify(createdJson)], {
    type: "application/json",
  });

  saveAs(file, `${fileSettings.fileName}.json`);
}
