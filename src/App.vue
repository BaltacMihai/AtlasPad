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
      pageContent: {
        content: exampleTest,
      },
      formattedVersion: null,
      fileUrl:
        "https://raw.githubusercontent.com/BaltacMihai/AtlasPad/main/versions.map.txt",
    };
  },
  async mounted() {
    try {
      const response = await fetch(this.fileUrl);
      const fileContents = await response.text();
      const rows = fileContents.split("\n");
      const lastRow = rows[rows.length - 1];
      const versionMatch = lastRow.match(/^v(\d+\.\d+\.\d+)\s/);
      if (versionMatch) {
        const version = versionMatch[1];
        this.formattedVersion = `Version: ${version}`;
      }
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<template>
  <div class="content">
    <Settings :pageContent="pageContent" />
    <TagsTree :tags="pageContent" />
  </div>
  <p class="version">{{ formattedVersion }}</p>
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
