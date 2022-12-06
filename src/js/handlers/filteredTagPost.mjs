import * as storage from "../storage/index.mjs";
import * as check from "../error-messages/allPosts-error.mjs";
import { createPosts } from "../posts/templates/createPost.mjs";
import { reactionListener } from "../posts/reaction.mjs";
import { commentListener } from "../posts/comment.mjs";
import { editListener } from "../posts/edit.mjs";
import { deleteListener } from "../posts/delete.mjs";

/**
 * // Async fetch call the sends a GET request to the server with the provided URL, returning the posts filtered by one tag name
 * @param {string} url // API endpoint url with the _tag="tagName" as flag
 * @example
 * ```js
 * // call the function and pass in the correct URL with the filter tags flag in the endpoint
 * filteredTagPost("https://api.noroff.dev/api/v1/social/posts?_author=true&_reactions=true&_comments=true&_tag=cake");
 * ```
 */
export async function filteredTagPost(url) {
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
    reactionListener();
    commentListener();
    editListener();
    deleteListener();
  } catch (error) {
    check.allPostsError(error);
    console.log(error);
  }
}
