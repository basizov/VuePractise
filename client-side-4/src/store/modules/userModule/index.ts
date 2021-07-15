import { IUser } from "@/models/user";
import { CommitOptions, DispatchOptions, Module, Store as VuexStore } from "vuex";
import actions, { IActions } from "./actions";
import mutations, { MutationsTypeAlias } from "./mutations";
import state, { StateTypeAlias } from "./state";

export type UserModuleTypeAlias<S = StateTypeAlias> = Omit<
  VuexStore<S>,
  'commit'
> & {
  commit<K extends keyof MutationsTypeAlias>(
    key: K,
    user?: IUser,
    users?: IUser[],
    options?: CommitOptions
  ): ReturnType<MutationsTypeAlias[K]>;
} & {
  dispatch<K extends keyof IActions>(
    key: K,
    options?: DispatchOptions
  ): ReturnType<IActions[K]>;
};

const userModule: Module<StateTypeAlias, StateTypeAlias> = {
  state: state,
  mutations: mutations,
  actions: actions
};

export default  userModule;