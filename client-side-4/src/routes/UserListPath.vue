<template>
  <section class="user-list">
    <base-input
      v-focus
      v-model="searchQuery"
      class='user-list__search'
      placeholder='Enter a search query..'
    />
  </section>
</template>

<script lang='ts'>
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: 'UsersPath',
    setup() {
      const searchQuery = ref<string>('Test');

      return {
        searchQuery
      };
    }
  });
</script>

<style lang='scss' scoped>
  .user-list {
    padding: 1rem;
    &__search {
      width: 100%;
    }
  }
</style>
