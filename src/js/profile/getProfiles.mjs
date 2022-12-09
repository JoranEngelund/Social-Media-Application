import { API_PROFILE_URL } from "../auth/constants.mjs";
import { getMyProfile } from "../handlers/getProfile.mjs";
import { renderProfile } from "./renderProfile.mjs";
import { renderProfilePosts } from "../posts/renderProfilePosts.mjs";
import * as storage from "../storage/index.mjs";
import { getPost } from "../handlers/getPost.mjs";
/**
 * // function that sends get request with authorization token to retrieve a specific post from API server
 * Utilizes URLSearchParams to get the ID from the queryString
 * and then renders and displays post with dynamically generated html
 * @example
 * ```js
 * displaySpecificPosts()
 * ```
 */
export async function loadProfile() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const name = params.get("name");
  const PROFILE_URL = `${API_PROFILE_URL}${name}?_followers=true&_following=true`;
  const profile = await getMyProfile(PROFILE_URL);
  renderProfile(profile);
}

export async function loadSpecificProfilePosts() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const user = params.get("name");
  const postURL = `https://api.noroff.dev/api/v1/social/profiles/${user}/posts?_author=true&_reactions=true&_comments=true`;
  const profilePosts = await getPost(postURL);
  renderProfilePosts(profilePosts);
}

export function setupSpecificProfile() {
  loadProfile();
  loadSpecificProfilePosts();
}
