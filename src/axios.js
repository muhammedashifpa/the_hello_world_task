import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL


export const axiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 25000,
    headers: {}
  });