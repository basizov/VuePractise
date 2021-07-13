import { createStore } from "vuex";
import { IRootState } from "./modules/root";
import root from "./modules/root";
import { CounterStoreTypeAlias } from "./modules/counter";
import { RootStoreTypeAlias } from "./modules/root/store";

const store = createStore<IRootState>(root);

enum  Modules {
  COUNTER_MODULE = 'counterModule',
  ROOT = 'root'
}

type StoreModules = {
  [Modules.COUNTER_MODULE]: CounterStoreTypeAlias;
  [Modules.ROOT]: RootStoreTypeAlias;
};

export type Store =
  CounterStoreTypeAlias<Pick<StoreModules, Modules.COUNTER_MODULE>>
  & RootStoreTypeAlias<Pick<StoreModules, Modules.ROOT>>;

export default  store;
