import * as storage from "../storage/index.mjs";
import { createPosts } from "../posts/templates/createPost.mjs";
import * as check from "../error-messages/allPosts-error.mjs";

/**
 * // Async function that sends get request with authorization token to retrieve all posts from API server
 * // Loops over all posts with forEach method and destructures it to access necessary properties
 * // has nested function calls that generates and displays dynamic html for posts
 * @param {string} url // API url
 * @example
 * ```js
 * // Call the function and pass in API-url as argument
 * getPosts(url);
 * ```
 */
export async function getPosts(url) {
  try {
    const token = storage.load("accessToken");
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const posts = await response.json();
    check.responseError(response);
    posts.forEach(
      ({
        title,
        created,
        id,
        media,
        updated,
        body,
        tags,
        author,
        comments,
        _count,
        reactions,
      }) => {
        const { name, avatar } = author;
        const { comments: commentCount, reactions: reactionCount } = _count;
        createPosts(
          title,
          created,
          id,
          media,
          updated,
          body,
          tags,
          name,
          avatar,
          comments,
          commentCount,
          reactionCount,
          reactions
        );
      }
    );
  } catch (error) {
    check.allPostsError(error);
  }
}
