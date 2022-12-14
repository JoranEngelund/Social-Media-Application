import { API_BASE_URL } from "../auth/constants.mjs";
import * as run from "../posts/listeners.mjs";
import { filterTemplateTags } from "../filter/templates/filter-dropdown.mjs";
import { sortedPosts } from "../handlers/sortPost.mjs";
import { toggleLoadingIndicator } from "../loader/loadingIndicator.mjs";
import { setSearchListener } from "../posts/searchPost.mjs";
import { displaySortInfo } from "./sortInfo.mjs";
import { renderPost } from "../posts/render.mjs";

/**
 * // Function that retrieves queryString from the url of the current page it's on and passes it into a API endpoint fetch call, to sort and show the posts in the sorted order that's in the parameter value
 * // Also displays a message to the user what kind of sort and sortOrder is active
 * @example
 * ```js
 * //call the function to retreive the queryString from the url
 * setupSorting();
 * ```
 */
export async function setupSorting() {
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const sortType = params.get("sort");
  const sortOrder = params.get("sortOrder");
  const sortPath = `/social/posts?sort=${sortType}&sortOrder=${sortOrder}&_author=true&_reactions=true&_comments=true`;
  const API_SORT_URL = `${API_BASE_URL}${sortPath}`;
  displaySortInfo(sortType, sortOrder);
  const posts = await sortedPosts(API_SORT_URL);
  renderPost(posts);
  toggleLoadingIndicator(posts);
  run.listeners();
  filterTemplateTags(posts);
  setSearchListener(posts);
}
