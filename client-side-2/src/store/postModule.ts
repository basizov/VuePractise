import { Module } from "vuex";
import { IPost } from '@/models/post';
import { IFilter } from '@/models/filters';
import agent from "@/api/agent";

export interface IState {
  posts: IPost[];
  showForm: boolean;
  sortOptions: IFilter[];
  selectedSort: string;
  searchQuery: string;
  page: number;
  limit: number;
}

interface GettersTypes {
  sortedPosts: IPost[];
  sortedAndSearchedPosts: IPost[];
  axiosParams: URLSearchParams;
}

export enum MutationsTypes {
  SET_POSTS = 'setPosts',
  SET_PAGE = 'setPage',
  SET_SELECTED_SORT = 'setSelectedSort',
  SET_SEARCH_QUERY = 'setSearchQuery'
}

export enum ActionTypes {
  FETCH_POSTS = 'fetchPosts',
  LOAD_MORE_POSTS = 'loadMorePosts'
}

const postModule: Module<IState, null> = {
  namespaced: true,
  state: () => ({
    posts: [],
    showForm: false,
    sortOptions: [
      { type: 'title', name: 'By title' },
      { type: 'body', name: 'By body' }
    ],
    selectedSort: '',
    searchQuery: '',
    page: 1,
    limit: 10
  }),
  getters: {
    sortedPosts(state: IState) {
      return [...state.posts].sort((fst: any, sec: any) =>
        (fst[state.selectedSort] as string)?.localeCompare(sec[state.selectedSort]));
    },
    sortedAndSearchedPosts(state: IState, getters: GettersTypes) {
      return getters.sortedPosts.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()));
    },
    axiosParams() {
      const params = new URLSearchParams();

      params.append('_page', this.page.toString());
      params.append('_limit', this.limit.toString());
      return (params);
    }
  },
  mutations: {
    [MutationsTypes.SET_POSTS](state: IState, posts: IPost[]) {
      state.posts = posts;
    },
    [MutationsTypes.SET_SELECTED_SORT](state: IState, selectedSort: string) {
      state.selectedSort = selectedSort;
    },
    [MutationsTypes.SET_PAGE](state: IState, page: number) {
      state.page = page;
    },
    [MutationsTypes.SET_SEARCH_QUERY](state: IState, searchQuery: string) {
      state.searchQuery = searchQuery;
    }
  },
  actions: {
    async [ActionTypes.FETCH_POSTS]({ state, commit, getters }) {
      const myGetters = getters as GettersTypes;

      try {
        const response = await agent.Posts.list(myGetters.axiosParams);

        commit(MutationsTypes.SET_POSTS, response);
      } catch (e) {
        console.error(e);
      }
    },
    async [ActionTypes.LOAD_MORE_POSTS]({ state, commit, getters }) {
      const myGetters = getters as GettersTypes;

      try {
        const response = [...state.posts, ...await agent.Posts.list(myGetters.axiosParams)];
        
        commit(MutationsTypes.SET_POSTS, response);
        commit(MutationsTypes.SET_PAGE, state.page + 1);
      } catch (e) {
        console.error(e);
      }
    }
  }
};

export default  postModule;
