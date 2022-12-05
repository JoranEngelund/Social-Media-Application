import { getPost } from "../handlers/getPost.mjs";
import { API_PROFILE_URL } from "../auth/constants.mjs";

/**
 * // function that sends get request with authorization token to retrieve a specific post from API server
 * Utilizes URLSearchParams to get the ID from the queryString
 * and then renders and displays post with dynamically generated html
 * @example
 * ```js
 * displaySpecificPosts()
 * ```
 */
export function displayProfile() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const name = params.get("name");
  const PROFILE_URL = `${API_PROFILE_URL}${name}?_followers=true&_following=true`;
  getPost(PROFILE_URL);
  console.log(PROFILE_URL);
}

displayProfile();
