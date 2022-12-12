import * as storage from "../storage/index.mjs";

/**
 * // Async fetch function that sends a URL endpoint request with postId and symbol string to the server
 * @param {string} url // URL endpoint with postId and symbol string
 * @param {string} method // Type of method request
 * @example
 * ```js
 * // call the function and pass in the API endpoint and type of method as arguments
 * sendReaction("https://api.noroff.dev/api/v1/social/posts/26/react/👍", "PUT")
 * ```
 */
export async function sendReaction(url, method) {
  try {
    const token = storage.load("accessToken");
    const response = await fetch(url, {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      window.location.reload();
    } else if (!response.ok) {
      throw alert("Your reaction wasn't sent correctly, try again");
    }
  } catch (error) {
    console.log(error);
    throw alert("Your reaction wasn't sent correctly, try again");
  }
}
