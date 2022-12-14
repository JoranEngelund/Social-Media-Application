import { getSpecificPost } from "../handlers/getSpecificPost.mjs";
import { toggleLoadingIndicator } from "../loader/loadingIndicator.mjs";
import { commentListener } from "./comment.mjs";
import { deleteListener } from "./delete.mjs";
import { editListener } from "./edit.mjs";
import { reactionListener } from "./reaction.mjs";
import { renderSpecificPost } from "./renderSpecific.mjs";

/**
 * // function that sets up an environment where it fetches a specific post from the API endpoint, renders and displayes it in a feed and also sets up an environment for commenting, editing, reacting, deleting on the specific post
 * @example
 * ```js
 * // call the function setupSpecificPost()
 * setupSpecificPost();
 * ```
 */
export async function setupSpecificPost() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");
  const SPECIFIC_POST_URL = `https://api.noroff.dev/api/v1/social/posts/${id}?_author=true&_reactions=true&_comments=true`;
  const post = await getSpecificPost(SPECIFIC_POST_URL);
  renderSpecificPost(post);
  reactionListener();
  deleteListener();
  editListener();
  commentListener();
  toggleLoadingIndicator(post);
}
