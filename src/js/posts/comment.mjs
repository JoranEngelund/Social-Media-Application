import { API_BASE_URL } from "../auth/constants.mjs";
import { sendComment } from "../handlers/sendComment.mjs";

/**
 * // function that takes a retrieves comment-forms and sends it into a forEach with a addEventListener, which sends the form data to api server and posts it as a comment
 * @example
 * ```js
 * // call the function in a scope where it can access .comment-form (form) elements
    commentListener();
    ```
 */
export function commentListener() {
  const commentForm = document.querySelectorAll(".comment-form");
  commentForm.forEach((formElement) => {
    formElement.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = event.target;
      const method = formData.method;
      const formId = event.target.id;
      const body = formData.body.value;
      const commentPath = `/social/posts/${formId}/comment`;
      const API_COMMENT_URL = `${API_BASE_URL}${commentPath}`;
      const comment = {
        body,
      };
      sendComment(API_COMMENT_URL, comment, method);
    });
  });
}
