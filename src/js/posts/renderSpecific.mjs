import { createPosts } from "./templates/createPost.mjs";

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
