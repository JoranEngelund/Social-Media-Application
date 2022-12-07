import * as storage from "../storage/index.mjs";
import { createPosts } from "../posts/templates/createPost.mjs";
import * as check from "../error-messages/allPosts-error.mjs";
import { commentListener } from "../posts/comment.mjs";
import { editListener } from "../posts/edit.mjs";
import { deleteListener } from "../posts/delete.mjs";
import { reactionListener } from "../posts/reaction.mjs";
/**
 * // Async function that sends get request with authorization token to retrieve a specific post from API server
 * // has nested function calls that generates and displays dynamic html for the post
 * @param {string} url // API url
 * @example
 * ```js
 * // Call the function and pass in API-url as argument
 * getSpecificPost(url);
 * ```
 */
export async function getSpecificPost(url) {
  try {
    const token = storage.load("accessToken");
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      window.location.replace("/home.html");
    }
    return await response.json();
  } catch (error) {
    if (error) {
      window.location.replace("/home.html");
    }
  }
}
