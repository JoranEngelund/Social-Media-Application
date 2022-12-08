import * as storage from "../storage/index.mjs";
import * as check from "../error-messages/allPosts-error.mjs";

/**
 * // Async function that sends get request with authorization token to retrieve all posts from API server
 * @param {string} url // API url
 * @example
 * ```js
 * // Call the function and pass in API-url as argument
 * getPost(url);
 * ```
 */
export async function getPost(url) {
  try {
    const token = storage.load("accessToken");
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    check.responseError(response);
    return await response.json();
  } catch (error) {
    check.allPostsError(error);
  }
}
