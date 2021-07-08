<template>
  <div class="app">
    <div class="app__show">
      <my-button
        @click="setShowForm"
        class="app__btn"
      >
        Show form
      </my-button>
      <my-input
        v-model="searchQuery"
      />
      <my-select
        v-model="selectedSort"
        :options="sortOptions"
      />
    </div>
    <my-modal v-model:show="showForm">
      <post-form
        @createPost="createPost"
      />
    </my-modal>
    <post-list
      :posts="sortedAndSearchedPosts"
      @deletePost="deletePost"
      v-if="sortedAndSearchedPosts.length > 0"
    />
    <h3 class="app__error" v-else>No posts yet :(</h3>
    <div ref="observer" class="observer"></div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from '@vue/runtime-core';
import { IPost } from '@/models/post';
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import agent from '@/api/agent';
import { IFilter } from '@/models/filters';

export default defineComponent({
  components: {
    PostForm,
    PostList
  },
  data: () => ({
    posts: [] as IPost[],
    showForm: false,
    sortOptions: [
      { type: 'title', name: 'By title' },
      { type: 'body', name: 'By body' }
    ] as IFilter[],
    selectedSort: '',
    searchQuery: '',
    page: 1,
    limit: 10
  }),
  mounted() {
    this.fetchPosts();
    const options = {
      rootMargin: '0px',
      threshold: 1.0
    }
    const callback = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        this.loadMorePosts();
      }
    };
    const observer = new IntersectionObserver(callback, options);

    observer.observe(this.$refs.observer as Element);
  },
  methods: {
    createPost(newPost: IPost) {
      this.posts.push(newPost);
      this.showForm = false;
    },
    deletePost(post: IPost) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    setShowForm() {
      this.showForm = true;
    },
    async fetchPosts() {
      try {
        this.posts = await agent.Posts.list(this.axiosParams);
      } catch (e) {
        console.error(e);
      }
    },
    async loadMorePosts() {
      try {
        this.posts = [...this.posts, ...await agent.Posts.list(this.axiosParams)];
        ++this.page;
      } catch (e) {
        console.error(e);
      }
    }
  },
  computed: {
    sortedPosts(): IPost[] {
      return [...this.posts].sort((fst: any, sec: any) =>
        (fst[this.selectedSort] as string)?.localeCompare(sec[this.selectedSort]));
    },
    sortedAndSearchedPosts(): IPost[] {
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
    },
    axiosParams() {
      const params = new URLSearchParams();

      params.append('_page', this.page.toString());
      params.append('_limit', this.limit.toString());
      return (params);
    }
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
