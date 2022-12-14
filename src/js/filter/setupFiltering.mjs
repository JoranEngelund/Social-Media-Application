import { API_BASE_URL } from "../auth/constants.mjs";
import { filteredTagPost } from "../handlers/filteredTagPost.mjs";
import { toggleLoadingIndicator } from "../loader/loadingIndicator.mjs";
import { commentListener } from "../posts/comment.mjs";
import { deleteListener } from "../posts/delete.mjs";
import { editListener } from "../posts/edit.mjs";
import { reactionListener } from "../posts/reaction.mjs";
import { renderPost } from "../posts/render.mjs";
import { setSearchListener } from "../posts/searchPost.mjs";

/**
 * // Function that retrieves queryString from the url of the current page it's on and passes it into a API endpoint fetch call, to filter and show the tag string name that's in the parameter value
 * @example
 * ```js
 * //call the function to retreive the queryString from the url
 * setupFilterTags()
 * ```
 */
export async function setupFilterTags() {
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const tag = params.get("tag");
  const filterPath = `/social/posts?_author=true&_reactions=true&_comments=true&_tag=${tag}`;
  const API_FILTER_URL = `${API_BASE_URL}${filterPath}`;
  const tagHeader = document.querySelector(".tags-header");
  tagHeader.innerText += `Showing posts with the tag:  ${tag}`;
  const posts = await filteredTagPost(API_FILTER_URL);
  renderPost(posts);
  reactionListener();
  commentListener();
  editListener();
  deleteListener();
  toggleLoadingIndicator(posts);
  setSearchListener(posts);
}
