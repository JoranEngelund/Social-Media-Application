import * as storage from "../storage/index.mjs";
import { responseError } from "../error-messages/allPosts-error.mjs";

/**
 * // Async function that sends get request with authorization token to retrieve profile from API server
 * @param {*} url
 * @returns
 *  ```js
 * // Call the function and pass in API-url as argument
 * getMyProfile(url);
 * ```
 */
export async function getMyProfile(url) {
  try {
    const token = storage.load("accessToken");

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    });
    return await response.json();
  } catch (error) {
    responseError(error);
  }
}
