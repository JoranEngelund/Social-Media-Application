import * as storage from "../storage/index.mjs";

/**
 * // async fetch call that deletes a post based on the Post ID
 * @param {string} url // url of the API endpoint with post ID
 * @param {string} method // method to use in the async function (Delete)
 * @example
 * ```js
 * // Call the deletePost() function and pass in the API endpoint with the ID of the desired post and the delete method
 * deletePost("https://api.noroff.dev/api/v1/social/posts/4599", "delete")
 * // This will delete the post with id 4599 from the api server.
 * ```
 */
export async function deletePost(url, method) {
  try {
    const token = storage.load("accessToken");
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      window.location.reload();
    } else if (!response.ok) {
      throw alert(
        "Something happened while trying to delete the post, try again"
      );
    }
  } catch (error) {
    console.log(error);
    throw alert(
      "Something happened while trying to delete the post, try again"
    );
  }
}
