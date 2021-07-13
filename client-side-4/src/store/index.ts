import { createStore } from "vuex";
import userModule, { UserModuleTypeAlias } from "./modules/userModule";

const store = createStore({
  modules: {
    userModule: userModule
  }
});

enum  Modules {
  USER_MODULE = 'userModule',
};

type StoreModules = {
  [Modules.USER_MODULE]: UserModuleTypeAlias;
};

export type Store = UserModuleTypeAlias<Pick<StoreModules, Modules.USER_MODULE>>;

export default  store;
