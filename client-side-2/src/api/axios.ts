import axios from 'axios';
import interseptors from '@/api/interceptors';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL
});

interseptors(instance);

export default  instance;
