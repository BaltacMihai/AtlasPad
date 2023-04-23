<template>
  <div class="form__page__mdx">
    <RadioTextInput
      label-name="Title"
      input-for="title"
      :options-text="['Same as file', 'Custom']"
      :value="additionalInfo"
      placeholder="HTML's page name"
    />

    <tabs :options="{ useUrlFragment: false }" nav-item-class="nav-item">
      <tab name="Meta">
        <RadioTextInput
          label-name="Charset"
          input-for="charset"
          :options-text="['None', 'Custom']"
          :value="additionalInfo.meta"
          placeholder="UTF-8"
        />
        <RadioTextInput
          label-name="Keywords"
          input-for="keywords"
          :options-text="['None', 'Custom']"
          :value="additionalInfo.meta"
          placeholder="HTML, CSS, JavaScript"
        />
        <RadioTextInput
          label-name="Description"
          input-for="description"
          :options-text="['None', 'Custom']"
          :value="additionalInfo.meta"
          placeholder="Generated with MDX Builder"
        />
        <RadioTextInput
          label-name="Author"
          input-for="author"
          :options-text="['None', 'Custom']"
          :value="additionalInfo.meta"
          placeholder="Baltac Mihai"
        />

        <RadioTextInput
          label-name="Viewport"
          input-for="viewport"
          :options-text="['Default', 'Custom']"
          :value="additionalInfo.meta"
          placeholder="width=device-width, initial-scale=1.0"
        />
      </tab>
      <tab name="Styles">
        <TextareaInput
          labelName="Imports"
          inputFor="imports"
          :value="additionalInfo.style"
          placeholder="<link rel='stylesheet' href='mystyle.css'>"
        />
        <TextareaInput
          labelName="Custom"
          inputFor="custom"
          :value="additionalInfo.style"
          placeholder="body { &#10; &nbsp; background-color: linen; &#10; &nbsp; } &#10; &#10; h1 { &#10; &nbsp; color: maroon; &#10; &nbsp; margin-left: 40px; &#10; &nbsp; }"
          initialHeight="10"
        />
      </tab>
      <tab name="Scripts">
        <TextareaInput
          labelName="Head Imports"
          inputFor="headImports"
          :value="additionalInfo.script"
          placeholder="<script src='myScript.js'></script>"
        />
        <TextareaInput
          labelName="Body Imports"
          inputFor="bodyImports"
          :value="additionalInfo.script"
          placeholder="<script src='myScript.js'></script>"
        />
        <TextareaInput
          labelName="Custom"
          inputFor="custom"
          :value="additionalInfo.script"
          placeholder="document.getElementById('demo').innerHTML = 'Hello JavaScript!'';"
        />
      </tab>
    </tabs>
  </div>
</template>

<script>
import RadioTextInput from "../Inputs/RadioTextInput.vue";
import TextareaInput from "../Inputs/TextareaInput.vue";
export default {
  props: {
    additionalInfo: Object,
  },
  components: {
    RadioTextInput,
    TextareaInput,
  },
  data() {
    return {
      title: {
        data: null,
      },
    };
  },
  methods: {
    changeTitleDefault() {
      this.isTitleDefault = !this.isTitleDefault;
    },
  },
};
</script>

<style lang="scss">
.form__page__mdx {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .tabs-component {
    display: flex;
    flex-direction: column;
    margin-left: -1rem;
    width: calc(100% + 2rem);

    &-tabs {
      padding: 0;
      gap: 0;

      .nav-item {
        padding: 1rem;
      }
    }
  }
}
</style>
