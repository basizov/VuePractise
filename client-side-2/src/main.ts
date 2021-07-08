import { createApp } from 'vue'
import App from './App.vue'
import UIComponents from './components/UIComponents';
import router from './router/router';

const vueApplication = createApp(App);

UIComponents.forEach((component) =>
  vueApplication.component(component.name, component)
);

vueApplication
  .use(router)
  .mount('#app');
