import { API_BASE_URL } from "../auth/constants.mjs";
import { sendReaction } from "../handlers/reactionPost.mjs";

/**
 * // function that listens on click and then retrieves the reaction elements on, and will then store the elements .innerText and ID in a URL which will be sent to the API server
 * @param {*} reaction // element with the reaction type and ID of the corresponding post
 * @example
 * ```js
 * // QuerySelectAll elements by the class of the reaction you want to send and pass it in as argument to the function
 * const getReaction = document.querySelectorAll(".classOfReactionElements");
    reactionListener(getReaction);
    ```
 */
export function reactionListener(reaction) {
  const reactionElements = reaction;
  reactionElements.forEach((reactionElement) => {
    reactionElement.addEventListener("click", (event) => {
      event.preventDefault();
      const method = "PUT";
      const reactionData = event.target;
      const typeOfReaction = reactionData.innerText;
      const postId = reactionData.id;
      const reactionPath = `/social/posts/${postId}/react/${typeOfReaction}`;
      const API_REACTION_URL = `${API_BASE_URL}${reactionPath}`;
      console.log(API_REACTION_URL);
      sendReaction(API_REACTION_URL, method);
    });
  });
}
