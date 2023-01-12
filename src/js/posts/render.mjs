import { createPosts } from "./templates/createPost.mjs";

/**
 * // Loops over all posts with forEach method and destructures it to access necessary properties
 * // has nested function calls that generates and displays dynamic html for posts
 * @param {*} posts
 * @example
 * ```js
 * Call the function and pass in posts as argument
 * renderPost(posts);
 * ```
 */
export function renderPost(posts) {
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
}
