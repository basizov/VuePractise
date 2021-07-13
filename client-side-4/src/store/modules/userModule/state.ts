import { IUser } from "@/models/user";

export type StateTypeAlias = {
  user: IUser | null;
};

const state: StateTypeAlias = {
  user: null
};

export default  state;
