import { API_BASE_URL } from "../auth/constants.mjs";
import { editPost } from "../handlers/editPost.mjs";

/**
 * // function that retrieves edit-post-form,  from a post and sends it into a forEach with a addEventListener, which sends the form data to api server and edit the post selected
 * @example 
 * ```js
 * // Call the function in a scope where it can access .edit-form (form) elements
    editListener();
 * ```
 */
export function editListener() {
  const editForm = document.querySelectorAll(".edit-form");
  editForm.forEach((formElement) => {
    formElement.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = event.target;
      const postId = formData.id;
      const method = "PUT";
      const title = formData.title.value;
      const body = formData.body.value;
      const tagsString = formData.tags.value;
      const tags = tagsString.split(",");
      const media = formData.media.value;
      const editPath = `/social/posts/${postId}`;
      const API_EDIT_URL = `${API_BASE_URL}${editPath}`;
      const editedPost = {
        title,
        body,
        tags,
        media,
      };
      editPost(API_EDIT_URL, editedPost, method);
    });
  });
}
