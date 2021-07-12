import { createApp } from 'vue'
import App from './App.vue'
import store from './store';

const vueApplication = createApp(App);

vueApplication
  .use(store)
  .mount('#app')
