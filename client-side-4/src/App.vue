<template>
  <navigation />
  <main class="main container">
    <router-view />
  </main>
</template>

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
