import { registerUser } from "./auth/registration.mjs";
import { setup } from "./posts/setup.mjs";
import { setupProfile } from "./profile/setup.mjs";
import { signout } from "./auth/logout.mjs";
import { filterTags } from "./filter/filterTags.mjs";
import { sortPosts } from "./sorter/sortType.mjs";
import { setupSpecificPost } from "./posts/setupSpecific.mjs";
import { setupSpecificProfile } from "./profile/setup.mjs";
import { followProfile } from "./profile/follow.mjs";
import { unfollowProfile } from "./profile/unfollow.mjs";

const path = window.location.pathname;

if (path === "/registration.html") {
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
  setupProfile();
  signout();
} else if (path === "/profile-specific.html") {
  setupSpecificProfile();
  followProfile();
  unfollowProfile();
}
