// Main js file that will be connected to all .html files, all functionality will be imported in here.

import { registerUser } from "./auth/registration.mjs";
import { loginUser } from "./auth/login.mjs";
import { displayPosts } from "./posts/getPosts.mjs";

const path = window.location.pathname;
console.log(path);

if (path === "/index.html") {
  loginUser();
} else if (path === "/registration.html") {
  registerUser();
}

displayPosts();
