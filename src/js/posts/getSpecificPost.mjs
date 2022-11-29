import { getSpecificPost } from "../handlers/getSpecificPost.mjs";

/**
 * // function that sends get request with authorization token to retrieve a specific post from API server
 * Utilizes URLSearchParams to get the ID from the queryString
 * and then renders and displays post with dynamically generated html
 * @example
 * ```js
 * displaySpecificPosts()
 * ```
 */
export function displaySpecificPost() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");
  const SPECIFIC_POST_URL = `https://api.noroff.dev/api/v1/social/posts/${id}?_author=true&_reactions=true&_comments=true`;
  getSpecificPost(SPECIFIC_POST_URL);
}
