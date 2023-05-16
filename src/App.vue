<script>
import Switch from "./components/atoms/Switch.vue";
import Select from "./components/molecules/Select.vue";
import Navbar from "./components/organisms/Navbar.vue";
import Settings from "./components/pages/Settings.vue";
import TagsEditor from "./components/pages/TagsEditor.vue";

export default {
  components: { Navbar, Settings, Select, Switch, TagsEditor },
  data() {
    return {
      isSettingsOpened: false,
      vmod: [
        {
          settings: {
            name: "div",
            isMinimized: true,
            isSettingsOptionOpened: true,
            type: "container",
          },
          attributes: {
            class: "Class Something",
            id: "IdSomething",
            custom: "CustomData:'ceva' CUSTOM-data:'altceva'",
          },
          content: [
            {
              settings: {
                name: "div",
                isMinimized: true,
                isSettingsOptionOpened: true,
                type: "text",
              },
              attributes: {
                class: "",
                id: "",
                custom: "",
              },
              content: [],
            },
          ],
        },
        {
          settings: {
            name: "div",
            isMinimized: true,
            isSettingsOptionOpened: true,
            type: "text",
          },
          attributes: {
            class: "",
            id: "",
            custom: "",
          },
          content: [],
        },
      ],
    };
  },
  methods: {
    triggerSettings() {
      this.isSettingsOpened = !this.isSettingsOpened;
    },
  },
};
</script>

<template>
  <Navbar :handleSettings="triggerSettings" />
  <Settings :handleSettings="triggerSettings" :isOpened="isSettingsOpened" />
  <TagsEditor :content="vmod" />
</template>

<style lang="scss"></style>
