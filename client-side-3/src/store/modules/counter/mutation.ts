import { MutationTree } from "vuex";
import { StateTypeAlias } from "./state";

export enum MutationTypes {
  INCREMENT_COUNTER = 'incrementCounter',
  DECREMENT_COUNTER = 'decrementCounter',
};

export type MutationsTypeAlias<S = StateTypeAlias> = {
  [MutationTypes.INCREMENT_COUNTER]: (state: S) => void;
  [MutationTypes.DECREMENT_COUNTER]: (state: S) => void;
};

const mutations: MutationTree<StateTypeAlias> & MutationsTypeAlias = {
  [MutationTypes.INCREMENT_COUNTER]: (state: StateTypeAlias) => {
    ++state.counter;
  },
  [MutationTypes.DECREMENT_COUNTER]: (state: StateTypeAlias) => {
    --state.counter;
  }
};

export default  mutations;
