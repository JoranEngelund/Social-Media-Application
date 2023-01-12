import * as storage from "../storage/index.mjs";
import * as check from "../error-messages/submitPost-error.mjs";
/**
 * // Async function that sends POST request to API server with an object as body.
 * @param {string} url // API server endpoint to send the request to
 * @param {object} post // object you want to send
 * @param {string} method // type of method request
 * @example
 * ```js
 * // Call the function and pass in the arguments
 * forwardPost(url, post, POST)
 * ```
 */
export async function forwardPost(url, post, method) {
  try {
    const token = storage.load("accessToken");
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(post),
    });
    if (response.ok) {
      window.location.reload();
    }
    check.submitPostError(response);
  } catch (error) {
    check.submitPostFault(error);
    console.log(error);
  }
}
