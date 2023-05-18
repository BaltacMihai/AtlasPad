<template>
  <div class="customSwitch">
    <Switch :options="options" v-model="selected" />

    <Input
      v-model="propModel"
      v-if="this.selected == options[1]"
      :placeholder="placeholder"
    />
  </div>
</template>
<script>
import handleVModel from "@/mixins/handleVModel";
import Switch from "../atoms/Switch.vue";
import Input from "../atoms/Input.vue";

export default {
  mixins: [handleVModel],
  props: {
    options: Array,
    placeholder: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      selected: this.modelValue == null ? this.options[0] : this.options[1],
    };
  },
  computed: {
    selectedValue() {
      if (this.modelValue == this.options[0]) return this.options[0];
      else return this.options[1];
    },
  },
  watch: {
    selected(newVal) {
      if (newVal == this.options[0]) {
        this.propModel = null;
      } else {
        this.propModel = "";
      }
    },
  },
  components: { Switch, Input },
};
</script>
<style lang="scss">
.customSwitch {
  display: flex;
  gap: 1rem;

  white-space: nowrap;
  flex-wrap: wrap;
}
</style>
