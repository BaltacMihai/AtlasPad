export default function renderCodeSnippetContent(content) {
  let contentArray = content.split("\n");
  let generatedContent = "";

  for (let row = 0; row < contentArray.length; row++) {
    contentArray[row] = contentArray[row].replace(/^\s+/g, function (match) {
      return match.replace(/ /g, "&nbsp;");
    });
    generatedContent += contentArray[row] + `\n`;
  }
  return generatedContent;
}
