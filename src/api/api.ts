import * as axios from 'axios';

const axiosInstance = axios.default.create({});

axiosInstance.defaults.withCredentials = true;
axiosInstance.defaults.baseURL = 'http://localhost:3000';

axiosInstance.defaults.headers.get["Accept"] = "application/json";

axiosInstance.defaults.headers.post["Accept"] = "application/json";
axiosInstance.defaults.headers.post["Content-Type"] = "application/json";

export default axiosInstance;