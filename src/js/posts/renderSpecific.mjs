import { createPosts } from "./templates/createPost.mjs";

/**
 * // destructures a single post, to access the necessary properties
 * // has nested function calls that generates and displays dynamic html for posts
 * @param {*} post
 * @example
 * ```js
 * Call the function and pass in post as argument
 * renderSpecificPost(post);
 * ```
 */
export function renderSpecificPost(post) {
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
}
