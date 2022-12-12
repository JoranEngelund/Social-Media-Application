import { API_BASE_URL } from "../auth/constants.mjs";
import { deletePost } from "../handlers/deletePost.mjs";

/**
 * // function that retrieves an link/cta for a post, that let's you delete the post. -> it will loop through all the delete links, and then adds a eventListener on "click" where it retrieves the ID from the clicked element that should be the same ID as a created post. It then uses the ID from the clicked element and passes it into a API endpoint, which then is used as a argument for a delete fetch call
 * @example
 * ```js
 * // Call the function inside a scope where it can access .delete-post anchor tags
    deleteListener();
    ```
 */
export function deleteListener() {
  const deleteBtn = document.querySelectorAll(".delete-post");
  deleteBtn.forEach((removePost) => {
    const deleteEntry = removePost;
    deleteEntry.addEventListener("click", (event) => {
      event.preventDefault();
      const eventData = event.target;
      const method = "delete";
      const postId = eventData.id;
      const deletePath = `/social/posts/${postId}`;
      const API_DELETE_URL = `${API_BASE_URL}${deletePath}`;
      deletePost(API_DELETE_URL, method);
    });
  });
}
