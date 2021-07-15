import agent from "@/api";
import { IUser } from "@/models/user";
import { ActionContext, ActionTree } from "vuex";
import { MutationsTypeAlias, MutationTypes } from "./mutations";
import { StateTypeAlias } from "./state";

export enum ActionTypes {
  GET_USERS = 'getUsers'
};

type  AugmentedActionContext = {
  commit<K extends keyof MutationsTypeAlias>(
    key: K,
    users: IUser[]
  ): ReturnType<MutationsTypeAlias[K]>
} & Omit<ActionContext<StateTypeAlias, StateTypeAlias>, "commit">;

export interface  IActions {
  [ActionTypes.GET_USERS]: ({ commit }: AugmentedActionContext) => void;
};

const actions: ActionTree<StateTypeAlias, StateTypeAlias> & IActions = {
  [ActionTypes.GET_USERS]: async ({ commit }: AugmentedActionContext) => {
    try {
      const users = await agent.Users.list();

      commit(MutationTypes.SET_USERS, users);
    } catch (e) {
      console.error(e)
    };
  }
}

export default  actions;
