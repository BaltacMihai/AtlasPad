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
      exempleTag: exampleTest[0],
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
  <p>{{ exempleTag }}</p>

  <!-- <h2>Compiled</h2>
  <p>{{ compiledCode }}</p>
  <h2>Tags</h2> -->
  <TagBuilder :tag="exempleTag" />
</template>
