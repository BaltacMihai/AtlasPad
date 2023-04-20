<template>
  <div class="input__group">
    <label :for="localId">{{ labelName }}</label>

    <div class="input__radio" @click="changeOption">
      <div class="circle" :class="{ selected: isDefault }"></div>
      <p class="text">{{ optionsText[0] }}</p>
    </div>

    <div class="input__radio">
      <div
        class="circle"
        :class="{ selected: !isDefault }"
        @click="changeOption"
      ></div>
      <p class="text" @click="changeOption">{{ optionsText[1] }}</p>
      <template v-if="!isDefault">
        <input
          type="text"
          :id="localId"
          :name="localId"
          v-model="value[inputFor]"
          :placeholder="placeholder"
        />
      </template>
    </div>
  </div>
</template>

<script>
import generateId from "@/utils/GenerateId";
export default {
  props: {
    labelName: String,
    inputFor: String,
    optionsText: Array,
    value: Object,
    placeholder: String,
  },
  data() {
    return {
      isDefault: this.value[this.inputFor] != null ? false : true,
    };
  },
  computed: {
    localId() {
      return generateId(this.labelName);
    },
  },
  methods: {
    changeOption() {
      this.isDefault = !this.isDefault;

      if (this.isDefault == true) {
        this.value[this.inputFor] = null;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss";
</style>
