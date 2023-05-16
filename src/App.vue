<script>
import Select from "./components/molecules/Select.vue";
import Navbar from "./components/organisms/Navbar.vue";
import Settings from "./components/pages/Settings.vue";

export default {
  components: { Navbar, Settings, Select },
  data() {
    return {
      isSettingsOpened: false,
      vmod: "Option 2",
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
  <Select v-model="vmod" :options="['Option 1', 'Option 2', 'Option 3']" />
</template>

<style lang="scss"></style>
