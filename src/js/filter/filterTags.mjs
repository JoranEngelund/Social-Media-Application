import { API_BASE_URL } from "../auth/constants.mjs";
import { filteredTagPost } from "../handlers/filteredTagPost.mjs";

/**
 * // Function that retrieves queryString from the url of the current page it's on and passes it into a API endpoint fetch call, to filter and show the tag string name that's in the parameter value
 * @example
 * ```js
 * //call the function to retreive the queryString from the url
 * filterTags()
 * ```
 */
export function filterTags() {
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const tag = params.get("tag");
  const filterPath = `/social/posts?_author=true&_reactions=true&_comments=true&_tag=${tag}`;
  const API_FILTER_URL = `${API_BASE_URL}${filterPath}`;
  const tagHeader = document.querySelector(".tags-header");
  tagHeader.innerText += `Showing posts with the tag:  ${tag}`;
  filteredTagPost(API_FILTER_URL);
}
