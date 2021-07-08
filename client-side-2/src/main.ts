import { createApp } from 'vue'
import App from './App.vue'
import UIComponents from './components/UIComponents';
import VDirectives from './directives';
import VIntersection from './directives/VIntersection';
import router from './router/router';

const vueApplication = createApp(App);

UIComponents.forEach((component) =>
  vueApplication.component(component.name, component)
);

VDirectives.forEach((directive) => 
  vueApplication.directive(directive.name, directive)
);

vueApplication
  .use(router)
  .mount('#app');
