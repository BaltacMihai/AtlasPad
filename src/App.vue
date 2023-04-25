<script>
import exampleTest from "./utils/Example.json";
import TagsTree from "./components/TagsTree.vue";
import Settings from "./components/Settings.vue";
import { usePageSettings } from "@/stores/pageSettings";
import { parse, stringify } from "flatted";
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
      pageSettings: {},
      formattedVersion: null,
      fileUrl:
        "https://raw.githubusercontent.com/BaltacMihai/AtlasPad/main/versions.map.txt",
    };
  },
  async mounted() {
    // Get the local storage if there is any
    const localPageContent = localStorage.getItem("localPageContent");
    const localPageSettings = localStorage.getItem("localPageSettings");

    const pageSettings = usePageSettings();

    // If data exists, parse the JSON string to an object
    if (localPageContent) {
      this.pageContent.content = parse(localPageContent);
    }
    if (localPageSettings) {
      pageSettings.updateSettings(parse(localPageSettings));
    }

    // Watch for changes in props and save to local storage
    this.$watch(
      () => [this.pageContent, pageSettings],
      ([newPageContent, newPageSettings]) => {
        localStorage.setItem(
          "localPageContent",
          stringify(newPageContent.content)
        );

        localStorage.setItem("localPageSettings", stringify(newPageSettings));
      },
      { deep: true }
    );

    // Get the version of the app
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
  watch: {
    pageContent(oldVersion, newVersion) {
      console.log(oldVersion, newVersion);
    },
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
