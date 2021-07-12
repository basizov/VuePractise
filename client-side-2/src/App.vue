<template>
  <nav class="nav">
    <div class="nav__link" @click="$router.push('/')">Logo</div>
    <router-link class="nav__link" to="/">Home</router-link>
    <router-link class="nav__link" to="/posts">Posts</router-link>
    <router-link class="nav__link" to="/store">PostsStore</router-link>
  </nav>
  <main class="main">
    <router-view />
  </main>
</template>

<script lang='ts'>
  import { defineComponent } from "vue";

  export default defineComponent({

  });
</script>

<style lang='scss' scoped>
  .nav {
    display: flex;
    align-items: center;
    top: 0;
    left: 0;
    position: fixed;
    z-index: 100;
    width: 100%;
    padding: 1rem;
    &__link {
      text-decoration: underline;
      cursor: pointer;
      color: hsl(0, 0%, 0%);
    }
    &__link:not(:first-child) {
      margin-left: 1rem;
    }
    font-size: 1.7rem;
    font-weight: 700;
    background-color: hsl(0, 0%, 100%);
    height: auto;
  }
  .main {
    margin-top: 3.5rem;
  }
</style>
