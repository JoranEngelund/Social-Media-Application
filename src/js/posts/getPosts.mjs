import { API_POSTS_URL } from "../auth/constants.mjs";
import { getPosts } from "../handlers/getPosts.mjs";

/**
 * // function that sends get request with authorization token to retrieve all posts from API server, and then renders and displays posts with dynamically generated html
 * @example
 * ```js
 * displayPosts()
 * ```
 */
export function displayPosts() {
  getPosts(API_POSTS_URL);
}
