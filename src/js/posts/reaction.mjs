import { API_BASE_URL } from "../auth/constants.mjs";
import { sendReaction } from "../handlers/reactionPost.mjs";

/**
 * // function that listens on click and then retrieves the reaction elements clicked on, and will then store the elements .innerText and ID in a URL which will be sent to the API server
 * @example
 * ```js
 * // Call the function in a scope where it can access elements with the class .send-reaction
    reactionListener();
    ```
 */
export function reactionListener() {
  const getReaction = document.querySelectorAll(".send-reaction");
  getReaction.forEach((reactionElement) => {
    reactionElement.addEventListener("click", (event) => {
      event.preventDefault();
      const method = "PUT";
      const reactionData = event.target;
      const typeOfReaction = reactionData.innerText;
      const postId = reactionData.id;
      const reactionPath = `/social/posts/${postId}/react/${typeOfReaction}`;
      const API_REACTION_URL = `${API_BASE_URL}${reactionPath}`;
      sendReaction(API_REACTION_URL, method);
    });
  });
}
