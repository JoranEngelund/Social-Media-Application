import { commentListener } from "./comment.mjs";
import { deleteListener } from "./delete.mjs";
import { editListener } from "./edit.mjs";
import { reactionListener } from "./reaction.mjs";
import { sendPost } from "./submitPost.mjs";

/**
 * // A function that creates an environment with functionalities as commenting, editing, deleting, reacting and sending a post on a home feed.
 * @example
 * ```js
 * // To run the different functionalities, call the listeners() function
 * listeners()
 * ```
 */
export function listeners() {
  commentListener();
  editListener();
  deleteListener();
  reactionListener();
  sendPost();
}
