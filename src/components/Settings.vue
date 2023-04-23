<template>
  <template v-if="isOpened">
    <div class="form">
      <div class="form__heading">
        <h2 class="title">Settings</h2>
        <img
          src="@/assets/icons/close.svg"
          alt="close"
          @click="triggerSettings"
        />
      </div>

      <tabs :options="{ useUrlFragment: false }" nav-item-class="nav-item">
        <tab name="File">
          <TextInput
            label-name="Name"
            inputFor="fileName"
            placeholder="Page's name"
            :value="pageSettings"
          />
          <div class="input__group">
            <label for="type">Format</label>
            <select
              name="type"
              id="type"
              @change="changeTypeOfFile"
              v-model="pageSettings.fileType"
            >
              <option value="mdx">MDX</option>
              <option value="md">Markdown</option>
              <option value="html">Html</option>
            </select>
            <div class="disclaimer">
              <img src="@/assets/icons/danger.svg" alt="danger-icon" />
              Affects app content.
            </div>
          </div>
        </tab>
        <tab name="Page" :is-disabled="pageSettings.fileType == 'md'">
          <component
            :is="pageSettingsForm"
            :additionalInfo="pageSettings.additionalInfo"
          />
        </tab>
      </tabs>

      <div class="form__actions">
        <div class="btn" @click="saveFile">Save</div>
        <div class="btn" @click="exportFile">Export</div>
      </div>
    </div>
  </template>
  <template v-else>
    <img
      src="@/assets/icons/setting.svg"
      alt="setting"
      @click="triggerSettings"
      class="open-settings"
    />
  </template>
</template>

<script>
import { defineAsyncComponent } from "vue";
import TextInput from "./partials/Inputs/TextInput.vue";
import htmlDefaultTemplate from "@/utils/FileSettingsTemplate/HTML.json";
import mdxDefaultTemplate from "@/utils/FileSettingsTemplate/MDX.json";
import generateJsonFile from "@/utils/GenerateJsonFile";
import exportMdxFile from "@/utils/ExportFile/ExportMdx";
import exportHtmlFile from "@/utils/ExportFile/ExportHTML";

export default {
  props: {
    pageSettings: Object,
    pageContent: Object,
  },
  data() {
    return {
      isOpened: true,
    };
  },
  computed: {
    pageSettingsForm() {
      switch (this.pageSettings.fileType) {
        case "mdx":
          return defineAsyncComponent(() =>
            import("@/components/partials/settingsForm/MdxForm.vue")
          );
        case "md":
          return defineAsyncComponent(() =>
            import("@/components/partials/settingsForm/EmptyForm.vue")
          );
        case "html":
          return defineAsyncComponent(() =>
            import("@/components/partials/settingsForm/HTMLForm.vue")
          );
      }
    },
  },
  methods: {
    triggerSettings() {
      this.isOpened = !this.isOpened;
    },
    changeTypeOfFile(event) {
      this.pageSettings.fileType = event.target.value;
      // builds the default additionalInfo
      switch (this.pageSettings.fileType) {
        case "html":
          this.pageSettings.additionalInfo = htmlDefaultTemplate;
          break;

        case "mdx":
          this.pageSettings.additionalInfo = mdxDefaultTemplate;
          break;
        default:
          this.pageSettings.additionalInfo = null;
      }
    },
    saveFile() {
      generateJsonFile(this.pageSettings, this.pageContent);
    },
    exportFile() {
      switch (this.pageSettings.fileType) {
        case "html":
          exportHtmlFile(this.pageSettings, this.pageContent);
          break;

        case "mdx":
          exportMdxFile(this.pageSettings, this.pageContent);
          break;
        default:
          generateJsonFile(this.pageSettings, this.pageContent);
      }
    },
  },
  components: { TextInput },
};
</script>

<style lang="scss">
.open-settings {
  position: fixed;
  top: 2.25rem;
  right: 2rem;
  width: 25px;
  z-index: 99999;
  &:hover {
    cursor: pointer;
  }
}

.form {
  height: calc(100% - 2rem);
  position: fixed;
  right: 0%;
  top: 0;
  margin: 1rem;
  background-color: #2c2c2c;
  width: 20%;
  border-radius: 10px;

  /* width */
  ::-webkit-scrollbar {
    width: 10px;

    &-track {
      background: lighten($color: #444444, $amount: 10);
    }
    &-thumb {
      background: #444444;
    }
  }

  &__heading {
    border-bottom: 1px solid #f2f2f2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;

    h2 {
      color: #f2f2f2;
      font-size: 1.5rem;
      font-weight: normal;
      letter-spacing: 1px;
    }

    img {
      width: 25px;
      &:hover {
        cursor: pointer;
      }
    }
  }

  .tabs-component-panels section {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    // Overflow Settings
    max-height: 70vh;
    overflow-y: auto;
  }

  &__actions {
    display: flex;
    padding: 1rem;
    width: 100%;
    gap: 1rem;

    position: absolute;
    bottom: 0;
    .btn {
      border: 1px solid #f2f2f2;
      padding: 1rem;
      border-radius: 5px;
      color: #f2f2f2;
      text-align: center;

      flex: 0 0 calc(30% - 4rem);

      &:nth-child(2) {
        flex: 0 0 calc(70% - 3.25rem);
      }

      &:hover {
        opacity: 0.75;
        cursor: pointer;
      }
    }
  }
}
</style>
