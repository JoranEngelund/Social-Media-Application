import { loginUser } from "./auth/login.mjs";

const path = window.location.pathname;
const host = window.location.hostname;
const port = window.location.port;
const URL_NO_PATH = `${host}${port}`;
const index_path = `${host}{port}/index.html`;

if (
  path === "/index.html" ||
  URL_NO_PATH === URL_NO_PATH ||
  index_path === index_path
) {
  loginUser();
}
