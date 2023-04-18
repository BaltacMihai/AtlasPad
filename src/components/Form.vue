<template>
  <div class="form">
    <div class="form-content">
      <div class="input">
        <label for="pageName">Page Name</label>
        <input
          type="text"
          v-model="pageSettings.name"
          id="pageName"
          title="pageName"
        />
      </div>
      <div class="input">
        <label for="frontMatter">Front Matter</label>
        <textarea
          v-model="pageSettings.frontMatter"
          id="frontMatter"
          title="frontMatter"
        />
      </div>
    </div>

    <div class="btn">
      <p @click="saveAsMdxFile">Save as MDX</p>

      <div class="more-options" @click="openMoreOptionsToSave">
        <img src="./../assets/icons/more-arrow.svg" alt="" />

        <template v-if="moreOptionsIsActive">
          <div class="moreOptions">
            <p @click="saveAsHtmlFile">Save as html</p>
            <p @click="saveAsTxtFile">Save as txt</p>
            <p @click="saveAsJsonFile">Save as json</p>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import generateMdxFile from "@/utils/GenerateMDXFile";
import generateJsonFile from "@/utils/GenerateJsonFile";

export default {
  props: {
    // mode: string,
    pageSettings: Object,
    pageContent: Object,
  },
  components: {},
  data() {
    return {
      moreOptionsIsActive: false,
    };
  },
  methods: {
    saveAsMdxFile() {
      generateMdxFile(this.pageContent, this.pageSettings, "mdx");
    },
    openMoreOptionsToSave() {
      this.moreOptionsIsActive = !this.moreOptionsIsActive;
    },
    saveAsTxtFile() {
      generateMdxFile(this.pageContent, this.pageSettings, "txt");
    },
    saveAsHtmlFile() {
      generateMdxFile(this.pageContent, this.pageSettings, "html");
    },
    saveAsJsonFile() {
      generateJsonFile(this.pageContent, this.pageSettings);
    },
  },
};
</script>

<style lang="scss">
.form {
  flex: 0 0 20%;
  border-left: 1px solid #5d60ef;
  height: calc(100% - 4rem);
  position: fixed;
  right: 0%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;

  width: 15%;
  padding: 2rem;

  .form-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .input {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      width: 100%;

      label {
        color: #5d60ef;
        font-weight: bold;
      }

      input,
      textarea {
        border: 1px solid #5d60ef;
        padding: 0.5rem;
        font-size: 1rem;
        border-radius: 5px;
        &:is(:hover, :focus, :focus-visible) {
          border: 1px solid #5d60ef;
          outline: none;
        }
      }
      textarea {
        height: 15rem;
        resize: vertical;
      }
    }
  }

  .btn {
    width: 100%;
    background-color: #5d60ef;
    border-radius: 10px;
    padding: 1rem 0;
    color: #fcfbfc;
    display: flex;
    justify-content: space-between;
    cursor: pointer;

    p {
      flex: 0 0 80%;
      text-align: center;
      &:hover {
        opacity: 0.75;
        cursor: pointer;
      }
    }

    .more-options {
      flex: 0 0 20%;
      width: 20%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-left: 1px solid #fcfbfc;
      position: relative;

      .moreOptions {
        display: flex;

        background: #5d60ef;
        position: absolute;
        top: -11.5rem;
        flex-direction: column;
        width: max-content;

        right: 0;
        border-radius: 10px;

        p {
          padding: 1rem;
          &:not(:last-child) {
            border-bottom: 1px solid #fcfbfc;
          }
        }
      }
    }
  }
}
</style>
