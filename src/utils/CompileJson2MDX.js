export default function compileJsonToMDX(tag) {
  switch (tag.tagType) {
    case "selfClose":
      return `<${tag.tagName} ${tag.tagAttributes}/>`;

    case "text":
      return `<${tag.tagName} ${tag.tagAttributes}> ${tag.content}</${tag.tagName}>`;

    case "container":
      return `<${tag.tagName} ${tag.tagAttributes}> ${tag.content
        ?.map((tagChild) => compileJsonToMDX(tagChild))
        .join("")}</${tag.tagName}>`;
  }
}
