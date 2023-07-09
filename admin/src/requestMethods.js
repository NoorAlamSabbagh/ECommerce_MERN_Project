import axios from "axios";

const BASE_URL = "http://localhost:6500/api/";
// const TOKEN = ""
// const TOKEN = localStorage.getItem("persist:root")?.user?JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user).currentUser.accessToken:null;
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
// console.log(JSON.parse(localStorage.getItem("persist:root")).currentUser);



// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});