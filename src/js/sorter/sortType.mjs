import { API_BASE_URL } from "../auth/constants.mjs";
import { sortedPosts } from "../handlers/sortPost.mjs";

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

  const sortInfo = document.querySelector(".type-of-sort");
  if (sortType === "title" && sortOrder === "asc") {
    sortInfo.innerText += ` Title A-Z`;
  } else if (sortType === "title" && sortOrder === "desc") {
    sortInfo.innerText += ` Title Z-A`;
  } else if (sortType === "created" && sortOrder === "asc") {
    sortInfo.innerText += ` Oldest Posts`;
  } else if (sortType === "created" && sortOrder === "desc") {
    sortInfo.innerText += ` Newest Posts`;
  }
  sortedPosts(API_SORT_URL);
}
