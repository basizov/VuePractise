<template>
  <form class='form'>
    <base-input
      v-model:modelValue="name"
      class='form__input'
      placeholder='Enter user name'
    />
    <base-input
      v-model:modelValue="username"
      class='form__input'
      placeholder='Enter user username'
    />
    <base-input
      v-model:modelValue="phone"
      class='form__input'
      placeholder='Enter user phone'
    />
    <base-input
      v-model:modelValue="email"
      class='form__input'
      placeholder='Enter user email'
    />
    <base-button
      class='form__btn'
      @click.prevent="addUser"
    >Add user</base-button>
  </form>
</template>

<script lang='ts'>
  import useStore from "@/hooks/useStore";
  import { ActionTypes } from "@/store/modules/userModule/actions";
  import { defineComponent, reactive, toRefs } from "vue";

  interface IForm {
    name: string;
    username: string;
    phone: string;
    email: string;
  }

  export default defineComponent({
    name: 'AddUserForm',
    setup() {
      const store = useStore();
      const formValues = reactive<IForm>({
        name: '',
        username: '',
        phone: '',
        email: '',
      });
      const addUser = () => {
        store.dispatch(ActionTypes.ADD_USER, {
          id: Date.now().toString(),
          name: formValues.name,
          username: formValues.username,
          email: formValues.email,
          phone: formValues.phone
        });
      };
      
      return {
        ...toRefs(formValues),
        addUser
      }
    }
  });
</script>

<style lang='scss' scoped>
  .form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: .3rem;
    &__input {
      min-width: 25rem !important;
    }
    &__btn {
      align-self: flex-end;
      font-size: 1.2rem;
      padding: .7rem !important;
    }
  }
</style>
