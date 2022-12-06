import { createPosts } from "./templates/createPost.mjs";
import { filterTemplateTags } from "../filter/templates/filter-dropdown.mjs";

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
      filterTemplateTags(tags);
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
