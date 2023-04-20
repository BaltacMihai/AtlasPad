<script>
import exampleTest from "./utils/Example.json";
import TagsTree from "./components/TagsTree.vue";
import Settings from "./components/Settings.vue";
import mdxDefaultTemplate from "@/utils/FileSettingsTemplate/MDX.json";

export default {
  components: {
    TagsTree,
    Settings,
  },
  data() {
    return {
      exampleTest,
      pageSettings: {
        fileName: "New Page",
        fileType: "mdx",
        additionalInfo: mdxDefaultTemplate,
      },
    };
  },
};
</script>

<template>
  <div class="content">
    <TagsTree :contentJson="exampleTest" :pageName="pageSettings.fileName" />
    <Settings :pageSettings="pageSettings" :pageContent="exampleTest" />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
* {
  padding: 0;
  margin: 0;
  font-family: "Open Sans", sans-serif;
}
body {
  background-color: #f2f2f2;
}

.content {
  display: flex;
  width: 100%;
}
</style>
