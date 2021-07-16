<template>
  <nav class="nav">
    <div class="container">
      <div class="nav__wrapper">
        <div class="nav__start">
          <router-link class="nav__link" to="/">Home</router-link>
          <router-link class="nav__link" to="/users">Users</router-link>
        </div>
        <div class="nav_end">
          <base-button @click='setShowModal'>Add user</base-button>
          <teleport to='body'>
            <modal v-model:show='showModal'>
              <add-user-form />
            </modal>
          </teleport>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import { defineComponent, ref } from "@vue/runtime-core";

  export default  defineComponent({
    name: 'Navigation',
    setup() {
      const showModal = ref(false);
      const setShowModal = () => showModal.value = true;

      return {
        showModal,
        setShowModal
      }
    }
  });
</script>

<style lang='scss' scoped>
  .nav {
    background-color: hsl(217, 10%, 46%);
    &__wrapper,
    &__start,
    &__end {
      display: flex;
      align-items: center;
      justify-content: start;
    }
    &__wrapper {
      padding: 0 1rem;
      justify-content: space-between;
    }
    &__link {
      outline: none;
      text-transform: uppercase;
      position: relative;
      padding: 1rem;
      font-family: inherit;
      color: inherit;
      text-decoration: none;
      font-size: 1.8rem;
      font-weight: 700;
      &:hover {
        background-color: hsl(216, 15%, 36%);
      }
      &:not(:last-of-type) {
        border-right: .1rem solid hsl(217, 96%, 9%);
      }
    }
  }
</style>
