import * as storage from "../storage/index.mjs";

/**
 * // Async fetch call that sends a edit-post to the API endpoint
 * @param {string} url // url of the API endpoint you want to send the request to
 * @param {object} profile // object of the data you want to send
 * @param {string} method  // type of request method
 * @example
 * ```js
 * // call the function with the correct API PATH to send data
 * editPost(url, profile, PUT);
 * ```
 */
export async function editProfileMedia(url, profileMedia, method) {
  console.log(url);
  try {
    const token = storage.load("accessToken");
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(profileMedia),
    });
    if (response.ok) {
      window.location.reload();
    }
  } catch (error) {
    console.log(error);
  }
}
