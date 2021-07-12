import { ActionContext, ActionTree } from "vuex";
import { IRootState } from "../root";
import { MutationsTypeAlias, MutationTypes } from "./mutation";
import { StateTypeAlias } from "./state";

export enum ActionTypes {
  SET_COUNTER = 'setCounter'
};

type  AugmentedActionContext = {
  commit<K extends keyof MutationsTypeAlias>(
    key: K,
    payload?: Parameters<MutationsTypeAlias[K]>[1]
  ): ReturnType<MutationsTypeAlias[K]>
} & Omit<ActionContext<StateTypeAlias, IRootState>, "commit">;

export interface  IActions {
  [ActionTypes.SET_COUNTER]: ({ commit }: AugmentedActionContext, payload: number) => void;
};

const actions: ActionTree<StateTypeAlias, IRootState> & IActions = {
  [ActionTypes.SET_COUNTER]: ({ state, commit }: AugmentedActionContext, payload: number) => {
    if (state.counter < payload)
      while (state.counter < payload)
        commit(MutationTypes.INCREMENT_COUNTER);
    else
      while (state.counter > payload)
        commit(MutationTypes.DECREMENT_COUNTER);
  }
};

export default  actions;
