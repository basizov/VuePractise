<template>
  <section class="users">
    <user-item
      v-for="user in users"
      :key="user.id"
      :user="user"
      @userDetailes="userDetailes"
    />
  </section>
</template>

<script lang='ts'>
  import { defineComponent, PropType } from "vue";
  import { IUser } from '@/models/user';
  import { MutationTypes } from "@/store/modules/userModule/mutations";
  import useStore from "@/hooks/useStore";

  export default defineComponent({
    name: 'UserList',
    props: {
      users: {
        type: Array as PropType<IUser[]>,
        default: []
      }
    },
    setup() {
      const store = useStore();
      const userDetailes = (user: IUser) => {
        console.log(user);
        store.commit(MutationTypes.SET_USER, user);
      };

      return {
        userDetailes
      }
    }
  });
</script>

<style lang='scss' scoped>
  .users {
    margin-top: 1.5rem;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: .7rem;
  }
</style>
