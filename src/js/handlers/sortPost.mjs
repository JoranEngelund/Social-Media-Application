import * as storage from "../storage/index.mjs";
import * as check from "../error-messages/allPosts-error.mjs";
import * as run from "../posts/listeners.mjs";
import { createPosts } from "../posts/templates/createPost.mjs";
import { filterTemplateTags } from "../filter/templates/filter-dropdown.mjs";
import { toggleLoadingIndicator } from "../loading/loadingIndicator.mjs";

/**
 * // Async fetch call that sorts the posts based on the URL endpoint with the neccessary sort="typeOfSort" & sortOrder="sortOrder" flags. returns and displays the posts sorted
 * @param {string} url // API endpoint with the neccessary sort="typeOfSort" & sortOrder="sortOrder" flags
 * @example
 * ```js
 * // call the function and pass in the API endpoint as argument
 * sortedPosts("https://api.noroff.dev/api/v1/social/posts?sort=title&sortOrder=asc&_author=true&_reactions=true&_comments=true");
 * ```
 */
export async function sortedPosts(url) {
  try {
    const token = storage.load("accessToken");
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    check.responseError(response);
    const posts = await response.json();
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
    run.listeners();
    toggleLoadingIndicator(posts);
  } catch (error) {
    check.allPostsError(error);
  }
}
