import { Store } from '@/store';
import { IState } from '@/store/postModule';

declare module  '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<IState>;
  }
}

declare module  'vuex' {
  export function useStore(key?: string): Store<IState>;
}
