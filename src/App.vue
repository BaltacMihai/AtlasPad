<script>
import Navbar from "./components/organisms/Navbar.vue";
import Settings from "./components/pages/Settings.vue";

export default {
  components: { Navbar, Settings },
  data() {
    return {
      name: "",
    };
  },
};
</script>

<template>
  <Navbar />
  <Settings />
</template>

<style lang="scss"></style>
