import * as storage from "../storage/index.mjs";

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
