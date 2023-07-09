import axios from "axios";

const BASE_URL = "http://localhost:6500/api/";
// const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTg5NmU5Njk4OGZjNzhkZjlmZTgzYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODMwMDI3MCwiZXhwIjoxNjg4NTU5NDcwfQ.2wvq4tDFuHPWHVYk9m3dHDoAqQ2Sxx8N2rVDiNU_khg";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;


const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});