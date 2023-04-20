<template>
  <div class="form__page__mdx">
    <div class="input__group">
      <label for="frontmatter">Front Matter</label>
      <textarea
        type="text"
        id="frontmatter"
        name="frontmatter"
        placeholder="Frontmatter of the app"
      />
    </div>
    <div class="input__group">
      <label for="imports">Imports</label>
      <textarea
        type="text"
        id="imports"
        name="imports"
        placeholder="Place to insert your imports"
      />
    </div>
    <div class="input__group">
      <label for="varAndComp">Variabels & Components</label>
      <textarea
        type="text"
        id="varAndComp"
        name="varAndComp"
        placeholder="Place to insert your declaration of Variabels and Components"
      />
    </div>
  </div>
</template>

<script></script>

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
