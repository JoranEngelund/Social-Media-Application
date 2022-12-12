import * as run from "../posts/listeners.mjs";
import { profileListeners } from "./listeners.mjs";
import { renderProfilePosts } from "../posts/renderProfilePosts.mjs";
import { getSpecificProfile } from "./getSpecificProfile.mjs";
import { getSpecificProfilePosts } from "./getSpecificProfile.mjs";
import { getProfilePosts, getUserProfile } from "./getUserProfile.mjs";
import { toggleLoadingIndicator } from "../loader/loadingIndicator.mjs";

/**
 * //Function that sets up specific profile using getSpecificProfile() and getSpecificProfilePosts() to fetch
 * profile data from the API
 * @example
 * //call function to initialize profile setup
 * setupSpecificProfile()
 */
export function setupSpecificProfile() {
  getSpecificProfile();
  getSpecificProfilePosts();
}
/**
 * //Function that sets up specific profile using getSpecificProfile() and getSpecificProfilePosts() to fetch
 * profile data from the API
 * @example
 * //call function to initialize profile setup
 * setupProfile()
 */
export async function setupProfile() {
  getUserProfile();
  getProfilePosts();
  const user = storage.load("profile").name;
  const postURL = `https://api.noroff.dev/api/v1/social/profiles/${user}/posts?_author=true&_reactions=true&_comments=true`;
  const profilePosts = await getPost(postURL);
  renderProfilePosts(profilePosts);
  toggleLoadingIndicator(profilePosts);
  run.listeners();
  profileListeners();
}
