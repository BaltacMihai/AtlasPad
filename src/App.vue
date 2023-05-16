<script>
import Switch from "./components/atoms/Switch.vue";
import Select from "./components/molecules/Select.vue";
import Navbar from "./components/organisms/Navbar.vue";
import Settings from "./components/pages/Settings.vue";

export default {
  components: { Navbar, Settings, Select, Switch },
  data() {
    return {
      isSettingsOpened: false,
      vmod: "Regular",
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
</template>

<style lang="scss"></style>
