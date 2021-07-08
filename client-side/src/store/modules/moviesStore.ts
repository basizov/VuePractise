import axios from '@/axios/axios';

const moviesStore = {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async fetchMovies(context: any) {
      console.log(context, axios);
      const response = await axios.get('/?i=tt0111161');

      console.log(response);
    }
  }
}

export default  moviesStore;
