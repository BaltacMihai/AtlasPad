function getAdditionalData(fileType) {
  if (fileType == "mdx") {
    return {
      frontMatter: "",
      imports: "",
      variable: "",
    };
  } else if (fileType == "html") {
    return {
      title: null,
      meta: {
        charset: null,
        keywords: null,
        description: null,
        author: null,
        viewport: null,
      },
      custom: {
        style: "",
        script: "",
      },
      imports: {
        style: "",
        scriptHead: "",
        scriptBody: "",
      },
    };
  }
}

export default getAdditionalData;
