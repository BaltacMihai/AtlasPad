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
        @click="changeTitleDefault"
      ></div>
      <p class="text" @click="changeOption">{{ optionsText[1] }}</p>
      <template v-if="!isDefault">
        <input
          type="text"
          :id="localId"
          :name="localId"
          v-model="value[inputFor]"
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
.input__group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    color: #f2f2f2;
    font-size: 1rem;
    letter-spacing: 1px;
  }
  .input__radio {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;

    &:hover {
      cursor: pointer;
    }

    .circle {
      $standard-size: 1rem;
      $outline-size: 1px;
      $border-size: 3px;

      $calculated-size: calc($standard-size + $border-size - $outline-size);

      width: $calculated-size;
      height: $calculated-size;
      border-radius: $calculated-size;
      outline: $outline-size solid #f2f2f2;

      &.selected {
        $calculated-size: calc($standard-size - $outline-size - $border-size);
        width: $calculated-size;
        height: $calculated-size;
        background-color: #f2f2f2;
        border: $border-size solid #2c2c2c;
      }
    }
    .text {
      color: #f2f2f2;
    }

    input,
    select {
      background-color: #f2f2f2;
      border: none;
      border-radius: 5px;
      font-size: 1rem;
      padding: 0.5rem;
      flex: 0 0 calc(100% - 1rem);

      &:is(:hover, :focus, :focus-visible) {
        border: none;
        outline: none;
      }
    }
  }
}
</style>
