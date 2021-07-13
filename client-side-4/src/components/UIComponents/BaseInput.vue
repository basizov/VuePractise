<template>
  <input
    :value="modelValue"
    @input="updateInput"
    type="text"
    class="input"
  >
</template>

<script lang='ts'>
  import { defineComponent, PropType } from "vue";

  export default defineComponent({
    name: 'BaseInput',
    props: {
      modelValue: {
        type: String as PropType<string>,
        required: true
      }
    },
    setup(_, { emit }) {
      const updateInput = (event: InputEvent) => {
        emit('update:modelValue', (event.target as HTMLInputElement).value);
      };

      return {
        updateInput
      };
    }
  });
</script>

<style lang='scss' scoped>
  .input {
    outline: none;
    padding: 1rem;
    background-color: transparent;
    border-radius: .3rem;
    min-width: 7.5rem;
    border: .1rem solid hsl(214, 90%, 36%);
    transition: border-color .25s linear;
    &:active,
    &:focus {
      border-color: hsl(39, 87%, 50%);
    }
  }
</style>
