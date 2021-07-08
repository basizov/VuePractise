<template>
  <input
    :value="modelValue"
    @input="updateInput"
    class="input"
    type='text'
  >
</template>

<script lang='ts'>
 import { defineComponent } from "vue";

 export default defineComponent({
   name: 'my-input',
   props: {
     modelValue: [String, Number]
   },
   methods: {
     updateInput(event: InputEvent) {
       this.$emit('update:modelValue', (event.target as HTMLInputElement).value);
     }
   }
 });
</script>

<style lang='scss' scoped>
  .input {
    min-width: 30rem;
    outline: none;
    border: .1rem solid hsl(207, 56%, 25%);
    padding: 1rem;
    box-shadow: .2rem .3rem .5rem hsla(0, 0%, 0%, .3);
    border-radius: .3rem;
    &:focus {
      border-color: hsl(0, 0%, 0%);
    }
  }
</style>
