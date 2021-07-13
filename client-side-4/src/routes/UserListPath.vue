<template>
  <section class="user-list">
    <base-input
      v-focus
      v-model="searchQuery"
      class='user-list__search'
      placeholder='Enter a search query..'
    />
    <user-list :users="sortedAndSearchedPosts" />
  </section>
</template>

<script lang='ts'>
  import { computed, defineComponent, PropType, ref } from "vue";
  import { IUser } from '@/models/user';

  export default defineComponent({
    name: 'UsersPath',
    setup() {
      const searchQuery = ref<string>('');
      const users: IUser[] = [
        { id: 1, name: 'Boris', phone: '89196916135', email: 'boris.sizov.2001@mail.ru', username: 'barkasOff' },
        { id: 2, name: 'Vladimir', phone: '89196916135', email: 'boris.sizov.2001@mail.ru', username: 'wronnel' },
        { id: 3, name: 'Adel', phone: '89196916135', email: 'boris.sizov.2001@mail.ru', username: 'cobara' }
      ];
      const sortedUsers = computed(() => users.sort((f, s) => {
        return f.name.localeCompare(s.name);
      }));
      const sortedAndSearchedPosts = computed(() => sortedUsers.value.filter(user => {
        return user.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      }));

      return {
        searchQuery,
        sortedUsers,
        sortedAndSearchedPosts
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
