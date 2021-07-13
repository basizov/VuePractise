<template>
  <nav class="nav">
    <div class="container">
      <div class="nav__wrapper">
        <router-link class="nav__link" to="/">Home</router-link>
        <router-link class="nav__link" to="/users">Users</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
  import { defineComponent } from "@vue/runtime-core";

  export default  defineComponent({
    name: 'Navigation'
  });
</script>

<style lang='scss' scoped>
  .nav {
    background-color: hsl(217, 10%, 46%);
    &__wrapper {
      display: flex;
      align-items: center;
      justify-content: start;
    }
    &__link {
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
