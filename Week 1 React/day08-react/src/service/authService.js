import axiosClient from "../api/axiosClient";
export function loginService(email, password) {
  return axiosClient.post("/auth/login",{
    username: email,
    password,
  });
}

export function checkToken() {
  return axiosClient.get("/auth/me");
}