import { IUser } from "@/models/user";

export type StateTypeAlias = {
  user: IUser | null;
  users: IUser[];
};

const state: StateTypeAlias = {
  user: null,
  users: []
};

export default  state;
