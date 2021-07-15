<template>
  <div class="user">
    <div class="user__name">{{ user.name }}</div>
    <div class="user__phone">{{ user.phone }}</div>
    <base-button
      class="user__btn"
      @click="userDetails"
    >Details</base-button>
  </div>
</template>

<script lang='ts'>
  import { defineComponent, PropType } from "vue";
  import { IUser } from '@/models/user';
  import { useRouter } from "vue-router";

  export default defineComponent({
    name: 'UserItem',
    props: {
      user: {
        type: Object as PropType<IUser>,
        required: true
      }
    },
    setup({ user }, { emit }) {
      const router = useRouter();
      const userDetails = () => {
        const userId = user.id;

        router.push(`/users/${userId}`);
        emit('userDetailes', user);
      };

      return {
        userDetails
      }
    }
  });
</script>

<style lang='scss' scoped>
  .user {
    padding: 1rem;
    // width: max-content;
    width: 100%;
    display: grid;
    gap: .3rem;
    background-color: hsl(199, 53%, 79%);
    border: .1rem solid hsl(214, 90%, 36%);
    border-radius: .3rem;
    &__name {
      font-size: 2rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: .2rem;
    }
    &__phone {
      color: hsl(209, 100%, 63%);
    }
    &__btn {
      align-self: end;
    }
  }
</style>
