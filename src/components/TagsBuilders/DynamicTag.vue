<template>
  <div class="tag" :class="{ minimized: isMinimized }">
    <div class="tag__header">
      <div class="tag__header__name">
        <img :src="generateTagIcon" alt="containerIcon" />
        <p class="tag-title">
          {{ tag.tagName.charAt(0).toUpperCase() + tag.tagName.slice(1) }}
        </p>
      </div>
      <div class="tag__header__actions">
        <img
          :src="expandCollapseIcon"
          class="expandIcon"
          @click="collapseElement"
        />

        <img
          src="@/assets/icons/settings.svg"
          class="settingsIcon"
          @click="openSettings"
        />
        <img
          @click="onDelete"
          src="@/assets/icons/trash.svg"
          class="deleteIcon"
        />
      </div>
    </div>
    <div class="tag__settings" :class="{ minimized: !isTagSettingsOpened }">
      <div class="tag__settings__tabs">
        <p
          :class="{ active: currentTab == 'settings' }"
          @click="changeTab('settings')"
        >
          Settings
        </p>
        <p
          :class="{ active: currentTab == 'attributes' }"
          @click="changeTab('attributes')"
        >
          Attributes
        </p>
      </div>
      <div class="tag__settings__content">
        <template v-if="currentTab == 'settings'">
          <SimpleRadioInput
            label-name="Custom Tag"
            :options-text="['No', 'Yes']"
            :value="isCustomTag"
            :change="handleIsCustomTag"
            class="inverse"
          />

          <template v-if="isCustomTag">
            <TextInput
              label-name="Name"
              inputFor="tagName"
              placeholder="Tag's name"
              :value="tag"
              class="inverse"
            />
            <div class="input__group inverse">
              <label for="type">Type</label>
              <select
                name="type"
                id="type"
                @change="changeTypeOfFile"
                v-model="tag.tagType"
              >
                <template v-for="tagType in defaultTypeTags">
                  <option :value="tagType">{{ tagType }}</option>
                </template>
              </select>
            </div>
          </template>
          <template v-else>
            <div class="input__group inverse">
              <label for="type">Name</label>
              <select
                name="type"
                id="type"
                v-model="tag.tagName"
                @change="changeDefaultType"
              >
                <template v-for="tagName in defaultTagsName">
                  <option :value="tagName">{{ tagName }}</option>
                </template>
              </select>
            </div>
          </template>
        </template>
        <template v-else-if="currentTab == 'attributes'">
          <TextInput
            label-name="Id"
            inputFor="id"
            placeholder="Tag's id"
            :value="tag.tagAttributes"
            class="inverse"
          />
          <TextInput
            label-name="Class"
            inputFor="class"
            placeholder="Tag's class"
            :value="tag.tagAttributes"
            class="inverse"
          />
          <template v-if="tag.tagType == 'link'">
            <TextInput
              label-name="Hyperlink"
              inputFor="href"
              placeholder="Tag's hyperlink"
              :value="tag.tagAttributes"
              class="inverse"
            />
          </template>
          <template v-if="tag.tagType == 'media'">
            <TextInput
              label-name="Src"
              inputFor="src"
              placeholder="Tag's src"
              :value="tag.tagAttributes"
              class="inverse"
            />
          </template>
          <TextInput
            label-name="Custom"
            inputFor="custom"
            placeholder="Tag's custom attributes"
            :value="tag.tagAttributes"
            class="inverse"
          />
        </template>
      </div>
    </div>
    <div class="tag__container">
      <component :is="childTag" :tag="tag" @delete="deleteTag" />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import SimpleRadioInput from "@/components/partials/Inputs/SimpleRadioInput.vue";
import TextInput from "@/components/partials/Inputs/TextInput.vue";
import defaultTags from "@/utils/DefaultTags/HTMLTags.json";
import defaultTypeTags from "@/utils/DefaultTags/TypeTags.json";

//Import dynamical the icons
import expandImgSrc from "@/assets/icons/expand.svg";
import shrinkImgSrc from "@/assets/icons/shrink.svg";

import defaultTagImgSrc from "@/assets/icons/tags/default.svg";
import customTagImgSrc from "@/assets/icons/tags/custom.svg";
import mediaTagImgSrc from "@/assets/icons/tags/media.svg";
import textTagImgSrc from "@/assets/icons/tags/text.svg";
import linkTagImgSrc from "@/assets/icons/tags/link.svg";
import containerTagImgSrc from "@/assets/icons/tags/container.svg";
import closingTagImgSrc from "@/assets/icons/tags/closingTag.svg";

export default {
  props: {
    tag: Object,
  },
  data() {
    console.log("Recompile");
    return {
      isMinimized: false,
      isTagSettingsOpened: false,
      currentTab: "settings",
      isCustomTag: false,
      attributes: {
        id: "",
        class: "",
        custom: "",
      },
    };
  },

  computed: {
    childTag() {
      switch (this.tag.tagType) {
        case "selfClose":
          return defineAsyncComponent(() => import("./_SingleTag.vue"));
        case "text":
          return defineAsyncComponent(() => import("./_ContentTag.vue"));
        case "link":
          return defineAsyncComponent(() => import("./_ContentTag.vue"));

        case "media":
          return defineAsyncComponent(() => import("./_ImgTag.vue"));

        case "container":
          return defineAsyncComponent(() => import("./_ContainerTag.vue"));
      }
    },
    generateTagIcon() {
      if (this.isCustomTag) return customTagImgSrc;
      const type = this.tag.tagType;
      const typeObject = defaultTypeTags.types.find((t) => t.name === type);
      switch (typeObject.name) {
        case "media":
          return mediaTagImgSrc;
        case "text":
          return textTagImgSrc;
        case "link":
          return linkTagImgSrc;
        case "container":
          return containerTagImgSrc;
        case "singleTag":
          return closingTagImgSrc;
        default:
          return defaultTagImgSrc;
      }
    },

    expandCollapseIcon() {
      return this.isMinimized ? expandImgSrc : shrinkImgSrc;
    },
    defaultTagsName() {
      const tagNames = [];
      defaultTags.tags.forEach((tag) => {
        tagNames.push(tag.name);
      });
      return tagNames;
    },
    defaultTypeTags() {
      const tagTypes = [];
      defaultTypeTags.types.forEach((type) => {
        tagTypes.push(type.name);
      });
      return tagTypes;
    },
  },
  methods: {
    handleIsCustomTag(value) {
      this.isCustomTag = value;
    },
    changeDefaultType() {
      const name = this.tag.tagName;
      const nameObject = defaultTags.tags.find((t) => t.name === name);
      if (nameObject) {
        console.log(nameObject);
        this.tag.tagType = nameObject.type;
      }
    },

    onDelete() {
      this.$emit("delete", this.tag);
    },
    deleteTag(tag) {
      const index = this.tag.content.indexOf(tag);
      if (index !== -1) {
        this.tag.content.splice(index, 1);
      }
    },

    collapseElement() {
      this.isMinimized = !this.isMinimized;
      this.isTagSettingsOpened = !this.isTagSettingsOpened;
    },
    openSettings() {
      this.isTagSettingsOpened = !this.isTagSettingsOpened;
    },
    changeTab(tabName) {
      this.currentTab = tabName;
    },
  },

  components: {
    SimpleRadioInput,
    TextInput,
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss";
.tag {
  border: 1px solid #2c2c2c;
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  &__header {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;

    background-color: #2c2c2c;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;

    &__name {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      p {
        color: #f2f2f2;
      }
    }

    &__actions {
      display: flex;
      align-items: center;
      gap: 1rem;
      opacity: 0;

      img {
        width: 25px;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
  &:hover {
    & .tag__header__actions {
      opacity: 1;
    }
  }

  &__settings {
    border-bottom: 1px solid #2c2c2c;
    flex-direction: column;
    &.minimized {
      display: none;
    }
    display: flex;

    &__tabs {
      display: flex;
      border-bottom: 1px solid #dadada;
      padding: 0 1rem;
      gap: 1rem;

      p {
        padding: 1rem 0;
        font-size: 1.1rem;
        letter-spacing: 1px;
        &.active {
          border-bottom: 2px solid #dadada;
          font-weight: bold;

          &:not(.active) {
            color: #bfbfbf;
          }
        }
        &:hover {
          cursor: pointer;
          opacity: 0.75;
        }
      }
    }
    &__content {
      padding: 1rem;
      display: flex;
      gap: 2.5rem;
      flex-wrap: wrap;
    }
  }

  &__container {
    padding: 1rem;
  }

  &.minimized {
    .tag__header {
      border-radius: 10px;
    }
    .tag__settings {
      display: none;
    }
    .tag__container {
      display: none;
    }
  }
}
</style>
