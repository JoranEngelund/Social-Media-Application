import { API_BASE_URL } from "../auth/constants.mjs";
import { sendComment } from "../handlers/sendComment.mjs";

/**
 * // function that takes a retrieved comment-form from a try block and sends it into a forEach with a addEventListener, which sends the form data to api server and posts it as a comment
 * @param {*} forms // querySelectorAll forms from the rendered posts
 * @example
 * ```js
 * // retrieve a form by querySelector all inside a try block
 * const commentForm = document.querySelectorAll(".comment-form");
    getForm(commentForm);
    ```
 */
export function getForm(forms) {
  const commentForm = forms;
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
        body: body,
      };
      sendComment(API_COMMENT_URL, comment, method);
    });
  });
}
