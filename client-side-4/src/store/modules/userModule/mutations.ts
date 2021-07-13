import { IUser } from "@/models/user";
import { MutationTree } from "vuex";
import { StateTypeAlias } from "@/store/modules/userModule/state";

export enum MutationTypes {
  SET_USER = 'setState'
};

export type MutationsTypeAlias<S = StateTypeAlias> = {
  [MutationTypes.SET_USER]: (state: S, user: IUser) => void;
};

const mutations: MutationTree<StateTypeAlias> & MutationsTypeAlias = {
  [MutationTypes.SET_USER]: (state: StateTypeAlias, user: IUser) => {
    state.user = user;
  }
};

export default  mutations;
