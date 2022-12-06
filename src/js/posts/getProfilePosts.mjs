import * as storage from "../storage/index.mjs";
import * as check from "../error-messages/allPosts-error.mjs";
import { renderPost } from "./render.mjs";

/**
 * // Async function that sends get request with authorization token to retrieve all posts from API server
 * @param {string} url // API url
 * @example
 * ```js
 * // Call the function and pass in API-url as argument
 * getPost(url);
 * ```
 */

export async function getPost() {
  try {
    const token = storage.load("accessToken");
    const response = await fetch(postURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const json = await response.json();
    console.log(json);
    check.responseError(response);
  } catch (error) {
    check.allPostsError(error);
  }
}

getPost();
