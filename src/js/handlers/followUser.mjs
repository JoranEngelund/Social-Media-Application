import * as storage from "../storage/index.mjs";

/**
 * // Async fetch call that sends a PUT request to the API endpoint and follows a profile
 * @param {string} url
 * @example
 * followUser(url);
 */
export async function followUser(url) {
  try {
    const token = storage.load("accessToken");
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      window.location.reload();
    }
  } catch (error) {
    console.log(error);
  }
}
