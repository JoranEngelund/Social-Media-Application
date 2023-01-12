import { getPost } from "../handlers/getPost.mjs";
import { renderPost } from "./render.mjs";
import { API_POSTS_URL } from "../auth/constants.mjs";
import * as run from "./listeners.mjs";
import { setSearchListener } from "./searchPost.mjs";
import { toggleLoadingIndicator } from "../loader/loadingIndicator.mjs";
import { filterTemplateTags } from "../filter/templates/filter-dropdown.mjs";

/**
 * // function that sets up an environment where it fetches all posts from the API endpoint, renders and displayes them on a feed
 * // and also sets up an environment for searching through posts, commenting, editing, reacting and sending a post on the home feed
 * @example
 * ```js
 * // call the function setup()
 * setup()
 * ```
 */
export async function setup() {
  const posts = await getPost(API_POSTS_URL);
  renderPost(posts);
  filterTemplateTags(posts);
  run.listeners();
  setSearchListener(posts);
  toggleLoadingIndicator(posts);
}
