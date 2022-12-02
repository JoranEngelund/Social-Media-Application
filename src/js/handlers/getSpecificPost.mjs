import * as storage from "../storage/index.mjs";
import { createPosts } from "../posts/templates/createPost.mjs";
import * as check from "../error-messages/allPosts-error.mjs";
import { getForm } from "../posts/comment.mjs";
import { getEditForm } from "../posts/edit.mjs";
import { getDelete } from "../posts/delete.mjs";
import { reactionListener } from "../posts/reaction.mjs";
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
    const getReaction = document.querySelectorAll(".send-reaction");
    reactionListener(getReaction);
    const viewPost = document.querySelector(".view-post");
    viewPost.classList.add("d-none");
    const deleteBtn = document.querySelectorAll(".delete-post");
    getDelete(deleteBtn);
    const editForm = document.querySelectorAll(".edit-form");
    getEditForm(editForm);
    const commentForm = document.querySelectorAll(".comment-form");
    getForm(commentForm);
  } catch (error) {
    check.allPostsError(error);
  }
}
