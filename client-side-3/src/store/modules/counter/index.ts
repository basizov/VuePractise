import { CommitOptions, DispatchOptions, Module, Store as VuexStore } from 'vuex';
import mutations, { MutationsTypeAlias } from './mutation';
import state, { StateTypeAlias } from './state';
import getters, { GettersTypeAlias } from './getters';
import actions, { IActions } from './action';
import { IRootState } from '../root';

export type CounterStoreTypeAlias<S = StateTypeAlias> = Omit<
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

const counterModule: Module<StateTypeAlias, IRootState> = {
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
};

export default  counterModule;
