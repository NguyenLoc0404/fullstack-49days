import axios from "axios";
const axiosClient = axios.create({
  // baseURL: "https://jsonplaceholder.typicode.com",
  baseURL: "https://dummyjson.com",
});
axiosClient.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("accessToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.log("Unauthorized");
    }

    return Promise.reject(error);
  },
);
export default axiosClient;