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
            isMinimized: false,
            isSettingsOptionOpened: true,
            type: "Regular",
            contentType: "container",
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
                type: "Regular",
                contentType: "text",
              },
              attributes: {
                class: "",
                id: "",
                custom: "",
              },
              content: "test",
            },
          ],
        },
        {
          settings: {
            name: "h1",
            isMinimized: true,
            isSettingsOptionOpened: true,
            type: "Regular",
            contentType: "text",
          },
          attributes: {
            class: "",
            id: "",
            custom: "",
          },
          content: "Lalalalal",
        },
        {
          settings: {
            name: "img",
            isMinimized: true,
            isSettingsOptionOpened: true,
            type: "Regular",
            contentType: "media",
          },
          attributes: {
            class: "",
            id: "",
            custom: "",
          },
          content:
            "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-36703721.jpg",
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
  <div class="app-content">
    <TagsEditor v-model="vmod" class="right" />
    <Settings :handleSettings="triggerSettings" :isOpened="isSettingsOpened" />
  </div>
</template>

<style lang="scss">
.app-content {
  display: flex;
  .right {
    width: -webkit-fill-available;
  }
}
</style>
