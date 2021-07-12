import { CommitOptions, DispatchOptions, Store as VuexStore } from "vuex";
import { IRootState } from ".";
import { IActions } from "../counter/action";
import { GettersTypeAlias } from "../counter/getters";
import { MutationsTypeAlias } from "../counter/mutation";

export type RootStoreTypeAlias<S = IRootState>  = Omit<
VuexStore<S>,
'commit' | 'getters' | 'dispatch'
> & {
commit<K extends keyof MutationsTypeAlias, P extends keyof Parameters<MutationsTypeAlias[K]>[1]>(
  key: K,
  payload?: P,
  options?: CommitOptions
): ReturnType<MutationsTypeAlias[K]>;
} & {
getters: {
  [K in keyof GettersTypeAlias]: ReturnType<GettersTypeAlias[K]>;
};
} & {
dispatch<K extends keyof IActions>(
  key: K,
  payload?: Parameters<IActions[K]>[1],
  options?: DispatchOptions
): ReturnType<IActions[K]>;
};
