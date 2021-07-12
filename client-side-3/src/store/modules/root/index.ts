import { Module, ModuleTree } from "vuex";
import counterModule from '../counter';

export interface  IRootState {

}

const modules: ModuleTree<IRootState> = {
  counterModule
};

const root: Module<IRootState, IRootState> = {
  modules
};

export default  root;
