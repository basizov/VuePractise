import { Store } from "@/store";
import { useStore as VuexStore } from "vuex";

const useStore = () => VuexStore() as Store;

export default  useStore;
