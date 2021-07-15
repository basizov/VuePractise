<template>
  <section class="dropdown" @click.stop>
    <div
      class="dropdown__header"
      @click="toggleDropDown"
    >{{ selectedItem }}</div>
    <div class="dropdown__items" :class="{
      'dropdown__items-active': showDropdown
    }">
      <div
        class="dropdown__item"
        v-for="item in itemsWithoutChoosen"
        :key="item.name"
        @click="chooseItem(item)"
      >{{ item.name }}</div>
    </div>
    <div class="dropdown__arrow" :class="{
      'dropdown__arrow-active': showDropdown
    }"></div>
  </section>
</template>

<script lang='ts'>
  import { computed, defineComponent, PropType, ref, onMounted, onUnmounted } from "vue";
  import { IFilter } from '@/models/filter';

  export default defineComponent({
    name: 'Dropdown',
    props: {
      items: {
        type: Array as PropType<IFilter[]>,
        required: true
      }
    },
    setup({ items }, { emit }) {
      const showDropdown = ref(false);
      const toggleDropDown = () => showDropdown.value = !showDropdown.value;
      const hideDropDown = () => {
        showDropdown.value = false;
      }
      const selectedItem = ref('Choose');
      const chooseItem = (item: IFilter) => {
        selectedItem.value = item.name;
        showDropdown.value = false;
        emit('changed', item.value);
      };
      const propsItems = [{
        name: 'Choose',
        value: ''
      }, ...items];
      const itemsWithoutChoosen = computed(() => propsItems.filter(i => i.name !== selectedItem.value));

      onMounted(() => document.addEventListener('click', hideDropDown));
      onUnmounted(() => document.removeEventListener('click', hideDropDown));

      return {
        showDropdown,
        toggleDropDown,
        selectedItem,
        itemsWithoutChoosen,
        chooseItem
      }
    }
  });
</script>

<style lang='scss' scoped>
  .dropdown {
    cursor: pointer;
    position: relative;
    min-width: 150px;
    &__header {
      overflow: hidden;
      outline: none;
      padding: 1rem;
      border: .1rem solid hsl(214, 90%, 36%);
      box-shadow: 0 0 .5em rgba(0, 0, 0, .3);
      border-radius: .3rem;
      transition: background-color .25s linear;
      &:hover {
        background-color: hsl(214, 90%, 36%);
      }
    }
    &__items {
      z-index: -1;
      opacity: 0;
      position: absolute;
      left: 0;
      top: 50%;
      border: .1rem solid hsl(214, 90%, 36%);
      border-radius: .3rem;
      box-shadow: 0 0 .5em rgba(0, 0, 0, .3);
      width: 100%;
      transition: opacity .25s linear, top .25s linear, z-index .25s linear;
      &-active {
        opacity: 1;
        z-index: 0;
        top: calc(100% + .3rem);
      }
    }
    &__item {
      padding: 1rem;
      transition: background-color .25s linear;
      &:hover {
        background-color: hsl(214, 90%, 36%);
      }
    }
    &__arrow {
      position: absolute;
      top: 0;
      right: 0;
      width: 3rem;
      height: 100%;
      pointer-events: none;
      &:after {
        content: '';
        position: absolute;
        top: 50%;
        right: 1rem;
        width: .7rem;
        height: .7rem;
        border-top: .2rem solid hsl(0, 0%, 0%);
        border-right: .2rem solid hsl(0, 0%, 0%);
        transform: translateY(-50%) rotate(135deg);
        transition: transform .25s linear;
      }
      &-active {
        &:after {
          transform: translateY(-50%) rotate(-45deg);
        }
      }
    }
  }
</style>
