<template>
  <navigation />
  <main class="main container">
    <router-view />
  </main>
</template>

<script lang='ts'>
  import { defineComponent, onMounted } from "vue";
  import useStore from "./hooks/useStore";
  import { ActionTypes } from "./store/modules/userModule/actions";

  export default  defineComponent({
    name: 'App',
    setup() {
      const store = useStore();
      
      onMounted(() => store.dispatch(ActionTypes.GET_USERS));
    }
  });
</script>

<style lang='scss'>
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-size: 1.4rem;
    overflow-y: overlay;
    scroll-behavior: smooth;
  }
  .container {
    width: 100%;
    max-width: 144rem;
    margin: 0 auto;
  }
</style>
