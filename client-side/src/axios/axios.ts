import axios from 'axios';
import interseptors from './interseptors';

console.log(process.env.VUE_APP_API_URL);

const instanse = axios.create({
  baseURL: process.env.VUE_APP_API_URL
});

interseptors(instanse);

export default  instanse;
