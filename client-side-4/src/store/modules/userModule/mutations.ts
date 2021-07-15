import { IUser } from "@/models/user";
import { MutationTree } from "vuex";
import { StateTypeAlias } from "@/store/modules/userModule/state";

export enum MutationTypes {
  SET_USER = 'setUser',
  SET_USERS = 'setUsers',
};

export type MutationsTypeAlias<S = StateTypeAlias> = {
  [MutationTypes.SET_USER]: (state: S, user: IUser) => void;
  [MutationTypes.SET_USERS]: (state: S, users: IUser[]) => void;
};

const mutations: MutationTree<StateTypeAlias> & MutationsTypeAlias = {
  [MutationTypes.SET_USER]: (state: StateTypeAlias, user: IUser) => {
    state.user = user;
  },
  [MutationTypes.SET_USERS]: (state: StateTypeAlias, users: IUser[]) => {
    state.users = users;
  }
};

export default  mutations;
