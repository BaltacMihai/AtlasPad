<script>
import exampleTest from "./utils/Example.json";
import TagsTree from "./components/TagsTree.vue";
import Form from "./components/Form.vue";
export default {
  components: {
    TagsTree,
    Form,
  },
  data() {
    return {
      exampleTest,
      pageSettings: {
        name: "New Page",
        frontMatter: "",
      },
    };
  },
};
</script>

<template>
  <div class="content">
    <TagsTree :contentJson="exampleTest" :pageName="pageSettings.name" />
    <Form :pageSettings="pageSettings" :pageContent="exampleTest" />
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
  background-color: #fcfbfc;
}

.content {
  display: flex;
  width: 100%;
  overflow: hidden;
}
</style>
