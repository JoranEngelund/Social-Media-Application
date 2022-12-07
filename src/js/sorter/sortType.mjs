import { API_BASE_URL } from "../auth/constants.mjs";
import { sortedPosts } from "../handlers/sortPost.mjs";
import { displaySortInfo } from "./sortInfo.mjs";

/**
 * // Function that retrieves queryString from the url of the current page it's on and passes it into a API endpoint fetch call, to sort and show the posts in the sorted order that's in the parameter value
 * // Also displays a message to the user what kind of sort and sortOrder is active
 * @example
 * ```js
 * //call the function to retreive the queryString from the url
 * sortPosts();
 * ```
 */
export function sortPosts() {
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const sortType = params.get("sort");
  const sortOrder = params.get("sortOrder");
  const sortPath = `/social/posts?sort=${sortType}&sortOrder=${sortOrder}&_author=true&_reactions=true&_comments=true`;
  const API_SORT_URL = `${API_BASE_URL}${sortPath}`;
  displaySortInfo(sortType, sortOrder);
  sortedPosts(API_SORT_URL);
}
