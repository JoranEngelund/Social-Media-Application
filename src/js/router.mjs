import { registerUser } from "./auth/registration.mjs";
import { setup } from "./posts/setup.mjs";
import { setupProfile } from "./profile/setup.mjs";
import { signout } from "./auth/logout.mjs";
import { setupFilterTags } from "./filter/setupFiltering.mjs";
import { setupSorting } from "./sorter/setupSorting.mjs";
import { setupSpecificPost } from "./posts/setupSpecific.mjs";
import { setupSpecificProfile } from "./profile/setup.mjs";
import { followProfile } from "./profile/follow.mjs";
import { unfollowProfile } from "./profile/unfollow.mjs";
import { loginUser } from "./auth/login.mjs";
import { checkToken } from "./auth/checkToken.mjs";

/**
 * // Function that checks which page the user is on and runs the functions that is needed on that page
 * @example
 * // run the router
 * router();
 */
export function router() {
  const path = window.location.pathname;

  if (path === "/" || path === "/index.html") {
    loginUser();
  } else if (path === "/registration.html") {
    registerUser();
  } else if (path === "/home.html") {
    setup();
    signout();
    checkToken();
  } else if (path === "/post-filter.html") {
    setupFilterTags();
    signout();
    checkToken();
  } else if (path === "/post-sorted.html") {
    setupSorting();
    signout();
    checkToken();
  } else if (path === "/post-specific.html") {
    setupSpecificPost();
    signout();
    checkToken();
  } else if (path === "/profile.html") {
    setupProfile();
    signout();
    checkToken();
  } else if (path === "/profile-specific.html") {
    setupSpecificProfile();
    followProfile();
    unfollowProfile();
    checkToken();
  }
}
