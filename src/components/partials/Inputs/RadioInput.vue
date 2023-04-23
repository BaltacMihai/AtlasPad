<template>
  <div class="input__group">
    <label :for="localId">{{ labelName }}</label>

    <div class="options">
      <div class="input__radio" @click="clickOption(false)">
        <div class="circle" :class="{ selected: !isDefault }"></div>
        <p class="text">{{ optionsText[0] }}</p>
      </div>

      <div class="input__radio" @click="clickOption(true)">
        <div class="circle" :class="{ selected: isDefault }"></div>
        <p class="text">{{ optionsText[1] }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import generateId from "@/utils/GenerateId";
export default {
  props: {
    labelName: String,
    optionsText: Array,
    value: Boolean,
    change: Function,
  },
  data() {
    return {
      isDefault: this.value,
    };
  },
  computed: {
    localId() {
      return generateId(this.labelName);
    },
  },
  methods: {
    clickOption(newValue) {
      this.isDefault = newValue;
      this.change(newValue);
    },
  },
};
</script>

<style lang="scss" scoped>
.input__group {
  gap: 1rem;
}
</style>
