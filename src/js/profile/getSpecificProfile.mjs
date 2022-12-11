import { API_PROFILE_URL } from "../auth/constants.mjs";
import { getMyProfile } from "../handlers/getProfile.mjs";
import { renderProfile } from "./renderProfile.mjs";
import { renderProfilePosts } from "../posts/renderProfilePosts.mjs";
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
export async function getSpecificProfile() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const name = params.get("name");
  const PROFILE_URL = `${API_PROFILE_URL}${name}?_followers=true&_following=true`;
  const profile = await getMyProfile(PROFILE_URL);
  renderProfile(profile);
}

export async function getSpecificProfilePosts() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const user = params.get("name");
  const SPECIFIC_PROFILEPOST_URL = `${API_PROFILE_URL}${user}/posts?_author=true&_reactions=true&_comments=true`;
  const profilePosts = await getPost(SPECIFIC_PROFILEPOST_URL);
  renderProfilePosts(profilePosts);
}
