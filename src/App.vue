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
    <Settings :pageSettings="pageSettings" :pageContent="exampleTest" />
    <TagsTree :contentJson="exampleTest" :pageName="pageSettings.fileName" />
  </div>
  <p class="version">Version: 1.1.0</p>
</template>

<style lang="scss">
@use "@/assets/scss";

.form ~ .content-page {
  width: 80%;
}

.content {
  min-height: calc(100vh - 2.5rem);
}

.version {
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1rem;
  letter-spacing: 1px;
  color: #2c2c2c;
}
</style>
