import { IUser } from "@/models/user";
import { AxiosResponse } from "axios";
import axios from "./axios";

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody)
};

const Users = {
  list: () => requests.get<IUser[]>('/users')
};

const agent = {
  Users
};

export default  agent;
