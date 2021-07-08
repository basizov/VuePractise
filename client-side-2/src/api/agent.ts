import axios from '@/api/axios';
import { IPost } from '@/models/post';
import { AxiosResponse } from 'axios';

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  delete: <T>(url: string) => axios.delete<T>(url).then(responseBody)
}

const Posts = {
  list: (params: URLSearchParams) => axios.get<IPost[]>('/posts', { params }).then(responseBody)
}

const agent = {
  Posts
}

export default  agent;
