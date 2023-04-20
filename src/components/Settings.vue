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

      <div class="form__tabs">
        <p
          :class="{ active: selectedTab == 'file' }"
          @click="changeTab('file')"
        >
          File
        </p>
        <p
          :class="{
            active: selectedTab == 'page',
            disabled: pageSettings.fileType == 'md',
          }"
          @click="pageSettings.fileType != 'md' ? changeTab('page') : () => {}"
        >
          Page
        </p>
      </div>

      <div class="form__content">
        <template v-if="selectedTab == 'file'">
          <div class="input__group">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              v-model="pageSettings.fileName"
              placeholder="Page's name"
            />
          </div>
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
        </template>
        <template v-else-if="selectedTab == 'page'">
          <component
            :is="pageSettingsForm"
            :additionalInfo="pageSettings.additionalInfo"
          />
        </template>
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

export default {
  props: {
    pageSettings: Object,
    pageContent: Object,
  },
  data() {
    return {
      isOpened: true,
      selectedTab: "file",
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
          EmptyForm;
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
    changeTab(tabName) {
      this.selectedTab = tabName;
    },
    changeTypeOfFile(event) {
      this.pageSettings.fileType = event.target.value;

      // builds the default additionalInfo

      switch (this.pageSettings.fileType) {
        case "html":
          this.pageSettings.additionalInfo = {
            title: null,
            meta: {
              charset: null,
              keywords: null,
              description: null,
              author: null,
              refresh: null,
              viewport: null,
            },
            style: {
              imports: "",
            },
            script: {
              headImports: "",
              bodyImports: "",
            },
          };
          break;
        default:
          this.pageSettings.additionalInfo = null;
      }
    },
  },
};
</script>

<style lang="scss">
.open-settings {
  position: fixed;
  top: 2.25rem;
  right: 2rem;
  width: 25px;
  &:hover {
    cursor: pointer;
  }
}

.form {
  flex: 0 0 20%;
  height: calc(100% - 2rem);
  position: fixed;
  right: 0%;
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

  &__tabs {
    display: flex;
    border-bottom: 1px solid #444444;
    padding: 0 1rem;
    gap: 1rem;

    p {
      padding: 1rem 0;
      color: #f2f2f2;
      font-size: 1.1rem;
      letter-spacing: 1px;

      &.active {
        border-bottom: 2px solid #444444;
        font-weight: bold;
      }

      &:not(.active) {
        color: darken($color: #f2f2f2, $amount: 20);
      }

      &:hover {
        cursor: pointer;
        opacity: 0.75;
      }

      &.disabled {
        color: #444444;
        &:hover {
          opacity: 1;
          cursor: not-allowed;
        }
      }
    }
  }

  &__content {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    // Overflow Settings

    max-height: 70vh;
    overflow-y: auto;

    .input__group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      label {
        color: #f2f2f2;
        font-size: 1rem;
        letter-spacing: 1px;
      }
      input,
      select {
        background-color: #f2f2f2;
        border: none;
        border-radius: 5px;
        font-size: 1rem;
        padding: 0.5rem;

        &:is(:hover, :focus, :focus-visible) {
          border: none;
          outline: none;
        }
      }

      .disclaimer {
        color: #f2f2f2;
        font-size: 0.9rem;
        letter-spacing: 0.5px;
        padding-left: 1rem;

        display: none;
        align-items: center;
        gap: 0.25rem;

        img {
          width: 20px;
        }
      }
      &:hover {
        .disclaimer {
          display: flex;
        }
      }
    }
  }
}
</style>
