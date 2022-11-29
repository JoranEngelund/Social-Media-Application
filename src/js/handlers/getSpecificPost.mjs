import * as storage from "../storage/index.mjs";
import { createPosts } from "../posts/templates/createPost.mjs";
import * as check from "../error-messages/allPosts-error.mjs";

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
    const post = await response.json();
    const {
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
    } = post;

    const { avatar, name } = author;
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
    const viewPost = document.querySelector(".view-post");
    viewPost.classList.add("d-none");
  } catch (error) {
    console.log(error);
  }
}

getSpecificPost();
