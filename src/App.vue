<script>
import Switch from "./components/atoms/Switch.vue";
import Select from "./components/molecules/Select.vue";
import Navbar from "./components/organisms/Navbar.vue";
import PageAdditionalData from "./components/pages/PageAdditionalData.vue";
import Settings from "./components/pages/Settings.vue";
import TagsEditor from "./components/pages/TagsEditor.vue";
import { useFileSettings } from "@/stores/FileSettings.js";
import getAdditionalData from "@/data/getAdditionalData.js";
import handleCloseWindow from "./mixins/handleCloseWindow";
import htmlToJson from "./data/import/importHTML";
import CodeEditor from "./components/pages/CodeEditor.vue";

export default {
  // mixins: [handleCloseWindow],
  components: {
    Navbar,
    Settings,
    Select,
    Switch,
    TagsEditor,
    PageAdditionalData,
    CodeEditor,
  },
  data() {
    const json = htmlToJson(`
      <div class="Class Something" id="IdSomething" data-s:'ceva' custom-data:'altceva'> 
        <div></div>
      </div> 
      <h1>Lalalalal</h1>
      <img src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-36703721.jpg"> `);
    return {
      isSettingsOpened: false,
      isAdditionalInfoOpened: false,
      isCodeOpened: true,
      fileContent: [],
      fileSettings: useFileSettings(),
    };
  },
  computed: {
    additionalInfo() {
      return getAdditionalData(this.fileSettings.fileType);
    },
  },
  methods: {
    triggerSettings() {
      this.isSettingsOpened = !this.isSettingsOpened;
    },
    handleAdditInfo() {
      this.isAdditionalInfoOpened = !this.isAdditionalInfoOpened;
    },
    handleCode() {
      this.isCodeOpened = !this.isCodeOpened;
    },
  },
};
</script>

<template>
  <Navbar
    :handleSettings="triggerSettings"
    :handleAdditionalInfo="handleAdditInfo"
    :fileContent="fileContent"
    :additionalInfo="additionalInfo"
  />
  <div class="app-content">
    <TagsEditor v-model="fileContent" class="right" />
    <Settings :handleSettings="triggerSettings" :isOpened="isSettingsOpened" />
    <PageAdditionalData
      :additional-info="additionalInfo"
      :is-opened="isAdditionalInfoOpened"
      :handle-addit-info="handleAdditInfo"
    />
    <CodeEditor
      :is-opened="isCodeOpened"
      :handle-code="handleCode"
      v-model="fileContent"
    />
  </div>
</template>

<style lang="scss">
.app-content {
  display: flex;
  .right {
    width: -webkit-fill-available;
  }
}

::placeholder {
  color: $cl-secondary;
}
</style>
