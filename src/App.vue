<script>
import Navbar from "./components/organisms/Navbar.vue";
import Settings from "./components/pages/Settings.vue";

export default {
  components: { Navbar, Settings },
  data() {
    return {
      isSettingsOpened: true,
    };
  },
  methods: {
    triggerSettings() {
      console.log("DA");
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
