import { IUser } from "@/models/user";
import { CommitOptions, Module, Store as VuexStore } from "vuex";
import mutations, { MutationsTypeAlias } from "./mutations";
import state, { StateTypeAlias } from "./state";

export type UserModuleTypeAlias<S = StateTypeAlias> = Omit<
  VuexStore<S>,
  'commit'
> & {
  commit<K extends keyof MutationsTypeAlias>(
    key: K,
    user: IUser,
    options?: CommitOptions
  ): ReturnType<MutationsTypeAlias[K]>;
};

const userModule: Module<StateTypeAlias, StateTypeAlias> = {
  state: state,
  mutations: mutations
};

export default  userModule;