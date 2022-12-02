// Main js file that will be connected to all .html files, all functionality will be imported in here.

import { registerUser } from "./auth/registration.mjs";
import { loginUser } from "./auth/login.mjs";
import { sendPost } from "./posts/submitPost.mjs";
import { displaySpecificPost } from "./posts/getSpecificPost.mjs";
import { setup } from "./posts/setup.mjs";

const path = window.location.pathname;
console.log(path);

if (path === "/index.html") {
  loginUser();
} else if (path === "/registration.html") {
  registerUser();
} else if (path === "/home.html") {
  setup();
} else if (path === "/post-specific.html") {
  displaySpecificPost();
}
