<template>
  <section class="user-list">
    <div class="user-list__filters">
      <base-input
        v-focus
        v-model="searchQuery"
        class='user-list__search'
        placeholder='Enter a search query..'
      />
      <dropdown
        class='user-list__dropdown'
        :items="items"
        @changed="changeDropdownSelected"
      />
    </div>
    <user-list :users="sortedAndSearchedPosts" />
  </section>
</template>

<script lang='ts'>
  import { computed, defineComponent, onMounted, PropType, ref } from "vue";
  import { IUser } from '@/models/user';
  import { FilterTypeAlias, IFilter } from "@/models/filter";
  import { useStore } from "@/hooks/useStore";
import { ActionTypes } from "@/store/modules/userModule/actions";
import { StateTypeAlias } from "@/store/modules/userModule/state";

  export default defineComponent({
    name: 'UsersPath',
    setup() {
      const store = useStore();
      const dropdownSelected = ref<FilterTypeAlias>('');
      const searchQuery = ref<string>('');
      // const users: IUser[] = [
      //   { id: '1', name: 'Boris', phone: '89196916135', email: 'boris.sizov.2001@mail.ru', username: 'barkasOff' },
      //   { id: '2', name: 'Vladimir', phone: '89196916135', email: 'boris.sizov.2001@mail.ru', username: 'wronnel' },
      //   { id: '3', name: 'Adel', phone: '89196916135', email: 'boris.sizov.2001@mail.ru', username: 'cobara' }
      // ];
      const users = computed(() => ((store.state.userModule as unknown) as StateTypeAlias).users);
      onMounted(() => store.dispatch(ActionTypes.GET_USERS));
      const sortedUsers = computed(() => {
        if (dropdownSelected.value !== '') {
          return [...users.value].sort((f, s) => f[dropdownSelected.value].localeCompare(s[dropdownSelected.value]));
        }
        return users.value;
      });
      const sortedAndSearchedPosts = computed(() => sortedUsers.value.filter(user => {
        if (dropdownSelected.value !== '') {
          return user[dropdownSelected.value].toLowerCase().includes(searchQuery.value.toLowerCase())
        }
        return user.name.toLowerCase().includes(searchQuery.value.toLowerCase());
      }));
      const items: IFilter[] = [
        { name: 'Name', value: 'name' },
        { name: 'Phone', value: 'phone' },
        { name: 'Username', value: 'username' }
      ];
      const changeDropdownSelected = (value: FilterTypeAlias) => {
        dropdownSelected.value = value;
      }

      return {
        searchQuery,
        sortedUsers,
        sortedAndSearchedPosts,
        items,
        changeDropdownSelected
      };
    }
  });
</script>

<style lang='scss' scoped>
  .user-list {
    padding: 1rem;
    &__filters {
      display: flex;
      align-items: center;
    }
    &__search {
      width: 100%;
    }
    &__dropdown {
      margin-left: 1rem;
    }
  }
</style>
