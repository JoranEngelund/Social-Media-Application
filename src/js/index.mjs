// Main js file that will be connected to all .html files, all functionality will be imported in here.

import { registerUser } from "./auth/registration.mjs";
import { loginUser } from "./auth/login.mjs";
import { setup } from "./posts/setup.mjs";
import { setupProfile } from "./profile/setup.mjs";
import { loadProfile } from "./profile/setup.mjs";
import { signout } from "./auth/logout.mjs";
import { filterTags } from "./filter/filterTags.mjs";
import { sortPosts } from "./sorter/sortType.mjs";
import { setupSpecificPost } from "./posts/setupSpecific.mjs";
import { setupSpecificProfile } from "./profile/getProfiles.mjs";

const path = window.location.pathname;
console.log(path);

if (path === "/index.html") {
  loginUser();
} else if (path === "/registration.html") {
  registerUser();
} else if (path === "/home.html") {
  setup();
  signout();
} else if (path === "/post-filter.html") {
  filterTags();
  signout();
} else if (path === "/post-sorted.html") {
  sortPosts();
  signout();
} else if (path === "/post-specific.html") {
  setupSpecificPost();
  signout();
} else if (path === "/profile.html") {
  loadProfile();
  setupProfile();
  signout();
} else if (path === "/profile-specific.html") {
  setupSpecificProfile();
}
