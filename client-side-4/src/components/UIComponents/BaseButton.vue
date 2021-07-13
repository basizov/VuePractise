<template>
  <button
    class="btn btn-base"
    :class="classes"
  ><slot></slot></button>
</template>

<script lang='ts'>
  import { defineComponent, PropType } from "vue";

  export default defineComponent({
    name: 'BaseButton',
    props: {
      classes: {
        type: String as PropType<string>,
        default: ''
      }
    }
  });
</script>

<style lang='scss' scoped>
  .btn {
    outline: none;
    cursor: pointer;
    padding: 1rem;
    font-weight: 700;
    background-color: transparent;
    border-radius: .3rem;
    min-width: 7.5rem;
    text-transform: uppercase;
    transition: background-color .25s linear;
    &-base {
      border: .1rem solid hsl(214, 90%, 36%);
      &:hover {
        background-color: hsl(214, 90%, 36%);
      }
      &:active {
        background-color: hsl(214, 93%, 32%);
      }
    }
    &-success {
      border: .1rem solid hsl(123, 75%, 32%);
      &:hover {
        background-color: hsl(123, 75%, 32%);
      }
    }
    &-danger {
      border: .1rem solid hsl(2, 85%, 28%);
      &:hover {
        background-color: hsl(2, 85%, 28%);
      }
    }
    &:focus {
      border-color: hsl(39, 87%, 50%);
    }
  }
</style>
