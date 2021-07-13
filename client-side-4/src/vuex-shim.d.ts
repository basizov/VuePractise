import { StateTypeAlias } from "./store/modules/userModule/state";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store<StateTypeAlias>;
  }
}