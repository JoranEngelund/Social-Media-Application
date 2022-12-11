import * as storage from "../storage/index.mjs";
import { getPost } from "../handlers/getPost.mjs";
import { renderProfilePosts } from "../posts/renderProfilePosts.mjs";
import * as run from "../posts/listeners.mjs";
import { profileListeners } from "./listeners.mjs";
import { getSpecificProfile } from "./getSpecificProfile.mjs";
import { getSpecificProfilePosts } from "./getSpecificProfile.mjs";
import { loadProfile } from "./getUserProfile.mjs";

/**
 * //Function that sets up profile using getMyProfile() fetch and initializing renderProfile()
 * @example
 * ```js
 * //call function to initialize profile setup
 * setupProfile()
 * ```
 */

export function setupSpecificProfile() {
  getSpecificProfile();
  getSpecificProfilePosts();
}

export async function setupProfile() {
  const user = storage.load("profile").name;
  const postURL = `https://api.noroff.dev/api/v1/social/profiles/${user}/posts?_author=true&_reactions=true&_comments=true`;
  const profilePosts = await getPost(postURL);
  renderProfilePosts(profilePosts);
  loadProfile();
  run.listeners();
  profileListeners();
}
