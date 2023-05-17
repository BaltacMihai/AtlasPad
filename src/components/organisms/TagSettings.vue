<template>
  <div class="tag_settings">
    <tabs :options="{ useUrlFragment: false }" nav-item-class="nav-item">
      <tab name="Settings">
        <LabeledInput
          label-name="Type"
          v-model="tag.settings.type"
          inputType="switch"
          :options="['Regular', 'Custom']"
        />

        <template v-if="tag.settings.type == 'Regular'">
          <LabeledInput
            label-name="Name"
            v-model="tag.settings.name"
            inputType="select"
            :options="[
              'img',
              'h1',
              'h2',
              'h3',
              'h4',
              'h5',
              'h6',
              'p',
              'i',
              'b',
              'a',
              'div',
              'section',
              'nav',
              'main',
              'footer',
              'br',
              'hr',
            ]"
          />
        </template>
        <template v-else>
          <LabeledInput
            label-name="Name"
            v-model="tag.settings.name"
            inputType="resettableInput"
          />
          <LabeledInput
            label-name="Content Type"
            v-model="tag.settings.contentType"
            inputType="select"
            :options="['media', 'text', 'link', 'container', 'singleTag']"
          />
        </template>
      </tab>
      <tab name="Attributes">
        <LabeledInput
          label-name="Id"
          v-model="tag.attributes.id"
          inputType="resettableInput"
        />
        <LabeledInput
          label-name="Class"
          v-model="tag.attributes.class"
          inputType="resettableInput"
        />
        <LabeledInput
          label-name="Custom"
          v-model="tag.attributes.custom"
          inputType="resettableInput"
        />
      </tab>
    </tabs>
  </div>
</template>
<script>
import LabeledInput from "./LabeledInput.vue";

export default {
  props: {
    tag: Object,
  },
  components: { LabeledInput },
};
</script>
<style lang="scss">
.tag_settings {
  border-bottom: 1px solid $cl-primary;
  border-top: 1px solid $cl-primary;

  .tabs-component {
    display: flex;
    flex-direction: column;

    &-tabs {
      display: flex;
      gap: 1rem;
      border-bottom: 1px solid $cl-secondary;
      .nav-item {
        list-style: none;
        padding: 1rem;
        a {
          text-decoration: none;
          font-size: $fs-text;
          color: $cl-black;
        }

        &.is-active {
          border-bottom: 1px solid $cl-primary;
          font-weight: bold;
          a {
            color: $cl-primary;
          }
        }
      }
    }

    &-panels {
      padding: 1rem;

      .tabs-component-panel {
        display: flex;
        align-items: center;
        gap: 1rem;
        .input-group {
          width: auto;
        }

        .select {
          width: 217px;
          &-content {
            max-height: 25vh;
            overflow: auto;
          }
        }

        input {
          border: 1px solid $cl-primary;
        }
      }
    }
  }
}
</style>
