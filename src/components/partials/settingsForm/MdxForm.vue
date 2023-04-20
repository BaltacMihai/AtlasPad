<template>
  <div class="form__page__mdx">
    <TextareaInput
      labelName="Front Matter"
      inputFor="frontMatter"
      :value="additionalInfo"
      placeholder="--- &#10; title: Frontmatter section &#10; ---"
      initialHeight="4"
    />
    <TextareaInput
      labelName="Imports"
      inputFor="imports"
      :value="additionalInfo"
      placeholder="import {Generator} from './mdxGenerator.js'"
    />
    <TextareaInput
      labelName="Variables & Components"
      inputFor="variables"
      :value="additionalInfo"
      placeholder="export const name = 'Baltac Mihai'"
    />
  </div>
</template>

<script>
import TextareaInput from "../Inputs/TextareaInput.vue";

export default {
  props: {
    additionalInfo: Object,
  },
  components: {
    TextareaInput,
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
    textarea {
      background-color: #f2f2f2;
      border: none;
      border-radius: 5px;
      font-size: 1rem;
      padding: 0.5rem;
      resize: vertical;

      &:is(:hover, :focus, :focus-visible) {
        border: none;
        outline: none;
      }
    }
  }
}
</style>
