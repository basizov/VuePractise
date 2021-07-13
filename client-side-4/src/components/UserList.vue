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

  export default defineComponent({
    name: 'UserList',
    props: {
      users: {
        type: Array as PropType<IUser[]>,
        default: []
      }
    },
    setup() {
      const userDetailes = (user: IUser) => {
        console.log(user);
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
    display: flex;
    align-items: center;
    gap: .7rem;
  }
</style>
