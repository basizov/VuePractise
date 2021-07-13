import { createApp } from 'vue'
import Components from '@/components';
import Directives from '@/directives';
import App from '@/App.vue'
import router from '@/router';

const vueApplication = createApp(App);

Components.forEach((component) => {
  vueApplication.component(component.name, component);
});

Directives.forEach((directive) => {
  vueApplication.directive(directive.name, directive.directive);
});

vueApplication
  .use(router)
  .mount('#app');
