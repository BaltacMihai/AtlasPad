<template>
  <div class="form__page__mdx">
    <!-- <div class="input__group">
      <label for="title">Title</label>
      <div class="input__radio" @click="changeTitleDefault">
        <div class="circle" :class="{ selected: isTitleDefault }"></div>
        <p class="text">Same as File</p>
      </div>
      <div class="input__radio">
        <div
          class="circle"
          :class="{ selected: !isTitleDefault }"
          @click="changeTitleDefault"
        ></div>
        <p class="text" @click="changeTitleDefault">Custom</p>
        <template v-if="!isTitleDefault">
          <input type="text" id="title" name="title" />
        </template>
      </div>
    </div> -->
    <RadioInput
      label-name="Title"
      input-for="title"
      :options-text="['Same as file', 'Custom']"
      :value="additionalInfo"
    />

    <div class="internal__tabs">
      <p :class="{ active: activeTab == 'meta' }" @click="changeTab('meta')">
        Meta
      </p>
      <p
        :class="{ active: activeTab == 'styles' }"
        @click="changeTab('styles')"
      >
        Styles
      </p>
      <p
        :class="{ active: activeTab == 'scripts' }"
        @click="changeTab('scripts')"
      >
        Scripts
      </p>
    </div>

    <div class="internal__tabs__content">
      <template v-if="activeTab == 'meta'"> </template>
    </div>
  </div>
</template>

<script>
import RadioInput from "../Inputs/_RadioInput.vue";
export default {
  props: {
    additionalInfo: Object,
  },
  components: {
    RadioInput,
  },
  data() {
    return {
      title: {
        data: null,
      },
      activeTab: "meta",
    };
  },
  methods: {
    changeTitleDefault() {
      this.isTitleDefault = !this.isTitleDefault;
    },
    changeTab(tabName) {
      this.activeTab = tabName;
    },
  },
  watch: {
    title(newVal, oldVal) {
      console.log(newVal);
    },
  },
};
</script>

<style lang="scss">
.form__page__mdx {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

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

  .internal__tabs {
    display: flex;
    border-bottom: 1px solid #444444;
    margin-left: -1rem;
    width: calc(100% + 2rem);

    p {
      padding: 1rem;
      color: #f2f2f2;
      font-size: 1.1rem;
      letter-spacing: 1px;

      &.active {
        border-bottom: 2px solid #444444;
        font-weight: bold;
      }

      &:not(.active) {
        color: darken($color: #f2f2f2, $amount: 20);
      }

      &:hover {
        cursor: pointer;
        opacity: 0.75;
      }

      &.disabled {
        color: #444444;
        &:hover {
          opacity: 1;
          cursor: not-allowed;
        }
      }
    }
  }
}
</style>
