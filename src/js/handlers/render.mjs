import * as storage from "../storage/index.mjs";
import { createPosts } from "../posts/templates/createPost.mjs";
import * as check from "../error-messages/allPosts-error.mjs";
import { getForm } from "../posts/comment.mjs";
import { getEditForm } from "../posts/edit.mjs";

export function renderPost(posts) {
  const allPosts = posts;
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
  const editForm = document.querySelectorAll(".edit-form");
  getEditForm(editForm);
  const commentForm = document.querySelectorAll(".comment-form");
  getForm(commentForm);
}