import * as storage from "../storage/index.mjs";
import * as check from "../error-messages/allPosts-error.mjs";

/**
 * // Async fetch call the sends a GET request to the server with the provided URL, returning the posts filtered by one tag name
 * @param {string} url // API endpoint url with the _tag="tagName" as flag
 * @example
 * ```js
 * // call the function and pass in the correct URL with the filter tags flag in the endpoint
 * filteredTagPost("https://api.noroff.dev/api/v1/social/posts?_author=true&_reactions=true&_comments=true&_tag=cake");
 * ```
 */
export async function filteredTagPost(url) {
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
    console.log(error);
  }
}
