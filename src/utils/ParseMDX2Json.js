export default function parseMDXToJson(mdx) {
  const result = [];
  const stack = [{ content: result }];

  const regex = /<([a-z]+)([^>]*)>([^<]*)<\/\1>|<([a-z]+)([^>]*)\/>/g;
  let match;

  while ((match = regex.exec(mdx))) {
    const [
      fullMatch,
      openTagName,
      openTagAttributes,
      content,
      selfCloseTagName,
      selfCloseTagAttributes,
    ] = match;
    const current = stack[stack.length - 1];

    if (openTagName) {
      const tag = {
        tagName: openTagName,
        tagAttributes: parseAttributes(openTagAttributes),
        tagType: "container",
        content: [],
      };

      current.content.push(tag);
      stack.push(tag);
    } else if (selfCloseTagName) {
      const tag = {
        tagName: selfCloseTagName,
        tagAttributes: parseAttributes(selfCloseTagAttributes),
        tagType: "selfClose",
        content: false,
      };

      current.content.push(tag);
    }

    if (content) {
      const tag = {
        tagName: openTagName,
        tagAttributes: parseAttributes(openTagAttributes),
        tagType: "text",
        content: content.trim(),
      };

      current.content.push(tag);
    }

    while (
      stack.length > 1 &&
      current.content === stack[stack.length - 2].content
    ) {
      stack.pop();
      current.tagAttributes = current.tagAttributes || "";
      current.content = current.content.map((child) => {
        delete child.tagName;
        delete child.tagType;
        return child;
      });
    }
  }

  return result;

  function parseAttributes(attributes) {
    const regex = /([a-z]+):\s*'([^']*)'/g;
    const result = {};

    let match;

    while ((match = regex.exec(attributes))) {
      const [fullMatch, key, value] = match;
      result[key] = value;
    }

    return result;
  }
}
