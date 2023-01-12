import * as storage from "../storage/index.mjs";
import * as check from "../error-messages/allPosts-error.mjs";

/**
 * // Async fetch call that sorts the posts based on the URL endpoint with the neccessary sort="typeOfSort" & sortOrder="sortOrder" flags. returns and displays the posts sorted
 * @param {string} url // API endpoint with the neccessary sort="typeOfSort" & sortOrder="sortOrder" flags
 * @example
 * ```js
 * // call the function and pass in the API endpoint as argument
 * sortedPosts("https://api.noroff.dev/api/v1/social/posts?sort=title&sortOrder=asc&_author=true&_reactions=true&_comments=true");
 * ```
 */
export async function sortedPosts(url) {
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
