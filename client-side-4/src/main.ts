import { createApp } from 'vue'
import Components from '@/components';
import Directives from '@/directives';
import App from '@/App.vue'
import router from '@/router';
import store from './store';

const vueApplication = createApp(App);

Components.forEach((component) => {
  vueApplication.component(component.name, component);
});

Directives.forEach((directive) => {
  vueApplication.directive(directive.name, directive.directive);
});

vueApplication
  .use(store)
  .use(router)
  .mount('#app');
