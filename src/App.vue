<script>
import exampleTest from "./utils/Example.json";
import compileJsonToMDX from "./utils/CompileJson2MDX";
import generateMDXFile from "./utils/GenerateMDXFile";

export default {
  data() {
    return {
      exampleTest,
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
</template>
