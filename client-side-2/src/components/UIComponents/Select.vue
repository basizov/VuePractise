<template>
  <select
    class="select"
    :value="modelValue"
    @change="changeHandler">
    <option disabled value="">Choose</option>
    <option
      v-for="option in options"
      :key="option.type"
      :value="option.type"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script lang='ts'>
  import { defineComponent, PropType } from "vue";
  import { IFilter } from '@/models/filters';

  export default defineComponent({
    name: 'my-select',
    props: {
      modelValue: {
        type: String as PropType<string>,
        required: true
      },
      options: {
        type: Array as PropType<IFilter[]>,
        default: () => []
      }
    },
    methods: {
      changeHandler(event: Event) {
        this.$emit('update:modelValue', (event.target as HTMLSelectElement).value);
      }
    }
  });
</script>

<style lang='scss' scoped>
  .select {
    outline: none;
    cursor: pointer;
    padding: .7rem;
    background: none;
    border: .1rem solid hsl(207, 56%, 25%);
    box-shadow: .2rem .3rem .5rem hsla(0, 0%, 0%, .3);
    font-weight: 700;
    border-radius: .3rem;
  }
</style>
