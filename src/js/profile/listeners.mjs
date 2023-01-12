import { editProfileListener } from "./editProfileMedia.mjs";

/**
 * // A function that creates an environment with functionalities as commenting, editing, deleting, reacting and sending a post on a home feed.
 * @example
 * ```js
 * // To run the different functionalities, call the listeners() function
 * listeners()
 * ```
 */
export function profileListeners() {
  editProfileListener();
}
