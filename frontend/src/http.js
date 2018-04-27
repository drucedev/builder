import config from "./config.js";
import axios from 'axios';

export default axios.create({
  baseURL: config.backendUrl
});
