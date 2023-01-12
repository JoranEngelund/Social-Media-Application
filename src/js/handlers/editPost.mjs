import * as storage from "../storage/index.mjs";

/**
 * // Async fetch call that sends a edit-post to the API endpoint
 * @param {string} url // url of the API endpoint you want to send the request to
 * @param {object} post // object of the data you want to send
 * @param {string} method  // type of request method
 * @example
 * ```js
 * // call the function with the correct API PATH to send data
 * editPost(url, post, PUT);
 * ```
 */
export async function editPost(url, post, method) {
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
    } else if (!response.ok) {
      throw alert(
        "Something happened while trying to edit the post, try again"
      );
    }
  } catch (error) {
    console.log(error);
    throw alert("Something happened while trying to edit the post, try again");
  }
}
