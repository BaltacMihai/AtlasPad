<script>
import exampleTest from "./utils/Example.json";
import compileJsonToMDX from "./utils/CompileJson2MDX";
import generateMDXFile from "./utils/GenerateMDXFile";
import TagBuilder from "./components/TagsTreeBuilder.vue";

export default {
  components: {
    TagBuilder,
  },
  data() {
    return {
      exampleTest,
      exempleTag: {
        tagName: "div",
        tagAttributes: "id: 'cdva'",
        tagType: "container",
        content: [
          {
            tagName: "p",
            tagAttributes: "class: 'altceva'",
            tagType: "text",

            content: "Paragraf",
          },
          {
            tagName: "a",
            tagAttributes: "href: '#'",
            tagType: "selfClose",
            content: false,
          },
          {
            tagName: "div",
            tagAttributes: "id: 'al 2lea div'",
            tagType: "container",
            content: [
              {
                tagName: "p",
                tagAttributes: "class: 'altceva'",
                tagType: "text",

                content: "Paragraf",
              },
              {
                tagName: "a",
                tagAttributes: "href: '#'",
                tagType: "selfClose",
                content: false,
              },
            ],
          },
        ],
      },
    };
  },

  computed: {
    compiledCode() {
      generateMDXFile(exampleTest[0]);

      return compileJsonToMDX(exampleTest[0]);
    },
  },
};
</script>

<template>
  <h1>Example Text</h1>
  <h2>Json:</h2>
  <p>{{ exampleTest }}</p>
  <h2>Compiled</h2>
  <p>{{ compiledCode }}</p>
  <h2>Tags</h2>
  <TagBuilder :tag="exempleTag" />
</template>
