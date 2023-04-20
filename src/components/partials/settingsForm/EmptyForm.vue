<template>
  <div class="empty-state">
    <div class="full"></div>
    <div class="checkbox"></div>
    <div class="semi"></div>
    <div class="semi left"></div>
    <p>No Available Content</p>
  </div>
</template>

<script></script>

<style lang="scss">
.empty-state {
  padding: 2rem;
  margin-top: 15vh;

  div {
    height: 3rem;
    background-color: #444444;
    border-radius: 5px;
    margin: 0.5rem 0;

    &.full {
      width: 100%;
    }
    &.checkbox {
      width: 3rem;
      display: inline-block;
    }
    &.semi {
      display: inline-block;
      margin-left: 1rem;
      width: calc(100% - 4rem);

      &.left {
        display: block;
        float: right;
        width: calc(100% - 4rem);
      }
    }
  }
  p {
    display: block;
    color: #444444;
    font-size: 2rem;
    font-weight: bold;
    margin-top: 5rem;
    text-align: center;
  }
}
</style>
