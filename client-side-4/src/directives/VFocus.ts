import { NamedDirective } from "@/directives";

const focusDirective: NamedDirective = {
  name: 'focus',
  directive: {
    mounted(el: HTMLElement) {
      el.focus();
    }
  }
};

export default  focusDirective;
