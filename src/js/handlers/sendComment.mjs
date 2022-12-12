import * as storage from "../storage/index.mjs";

/**
 * // Async fetch call that sends a comment to the API endpoint
 * @param {string} url // url of the API endpoint you want to send the request to
 * @param {object} comment // object of the data you want to send
 * @param {string} method  // type of request method
 * @example
 * ```js
 * // call the function with the correct API PATH to send data
 * sendComment(API_COMMENT_URL, comment, POST);
 * ```
 */
export async function sendComment(url, comment, method) {
  try {
    const token = storage.load("accessToken");
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(comment),
    });
    if (response.ok) {
      window.location.reload();
    } else if (!response.ok) {
      throw alert("Your comment wasn't sent correctly, try again");
    }
    console.log(response);
  } catch (error) {
    console.log(error);
    throw alert("Your comment wasn't sent correctly, try again");
  }
}
