import { GetterTree } from "vuex";
import { IRootState } from "../root";
import { StateTypeAlias } from "./state";

export type GettersTypeAlias = {
  doubleCounter: (state: StateTypeAlias) => number;
};

const getters: GetterTree<StateTypeAlias, IRootState> & GettersTypeAlias = {
  doubleCounter: (state: StateTypeAlias) => {
    return (state.counter * 2)
  }
};

export default  getters;
