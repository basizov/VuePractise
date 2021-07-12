<template>
  <div class="app">
    {{ limit }}
    {{ $store.state.post.limit }}
  </div>
</template>

<script lang='ts'>
import { defineComponent } from '@vue/runtime-core';
import PostList from '@/components/PostList.vue';
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';
import { ActionTypes, MutationsTypes } from '@/store/postModule';

export default defineComponent({
  components: {
    PostList
  },
  methods: {
    ...mapMutations({
      [MutationsTypes.SET_POSTS]: `post/${MutationsTypes.SET_POSTS}`,
      [MutationsTypes.SET_PAGE]: `post/${MutationsTypes.SET_PAGE}`,
      [MutationsTypes.SET_SELECTED_SORT]: `post/${MutationsTypes.SET_SELECTED_SORT}`,
      [MutationsTypes.SET_SEARCH_QUERY]: `post/${MutationsTypes.SET_SEARCH_QUERY}`
    }),
    ...mapActions({
      [ActionTypes.FETCH_POSTS]: `post/${ActionTypes.FETCH_POSTS}`,
      [ActionTypes.LOAD_MORE_POSTS]: `post/${ActionTypes.LOAD_MORE_POSTS}`
    })
  },
  computed: {
    ...mapState({
      limit: state => state.post.limit,
    }),
    ...mapGetters({

    })
  }
});
</script>

<style lang='scss'>
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: inherit;
    font-family: inherit;
    z-index: 1;
  }

  html {
    font-size: 62.5%;
  }

  #app {
    position: relative;
    min-width: 100%;
    min-height: 100vh;
    overflow-y: overlay;
    font-size: 1.4rem;
    scroll-behavior: smooth;
    padding: 1rem;
  }

  .app {
    &__show {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 1rem;
      margin-left: -1rem;
      border-bottom: .1rem solid hsla(0, 0%, 0%, .3);
      width: calc(100% + 2rem);
      padding-bottom: 1rem;
      margin-bottom: 1rem;
    }
    &__btn {
      font-size: 1.6rem;
    }
    &__error {
      text-align: center;
      font-size: 2.4rem;
      color: hsl(211, 72%, 17%);
      font-style: italic;
      letter-spacing: .3rem;
    }
  }
  .observer {
    width: 100%;
    height: 3rem;
    background-color: hsl(211, 72%, 17%);
  }
</style>
