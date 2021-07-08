<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script lang='ts'>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: 'my-button'
  });
</script>

<style lang='scss' scoped>
  .btn {
    cursor: pointer;
    padding: .7rem;
    background: none;
    border: .1rem solid hsl(207, 56%, 25%);
    box-shadow: .2rem .3rem .5rem hsla(0, 0%, 0%, .3);
    font-weight: 700;
    border-radius: .3rem;
    transition: background-color ease-in 250ms, color ease-in 250ms;
    &:hover {
      background-color: hsl(207, 56%, 25%);
      color: hsl(0, 0%, 100%);
    }
  }
</style>
