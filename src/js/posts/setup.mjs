import { getPosts } from "../handlers/getPosts.mjs";
import { renderPost } from "./render.mjs";
import { API_POSTS_URL } from "../auth/constants.mjs";
import * as run from "./listeners.mjs";

/**
 * // function that sets up an environment where it fetches all posts from the API endpoint, renders and displayes them on a feed and also sets up an environment for commenting, editing, reacting and sending a post on the home feed
 * @example
 * ```js
 * // call the function setup()
 * setup()
 * ```
 */
export async function setup() {
  const posts = await getPosts(API_POSTS_URL);
  console.log(posts);
  renderPost(posts);
  run.listeners();
}
