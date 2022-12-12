import { API_SEND_URL } from "../auth/constants.mjs";
import { forwardPost } from "../handlers/sendPost.mjs";

/**
 * // Function that gathers form values and passes them into an object
 * // also has a nested function that sends the object to an api server with url, object and method
 * @example
 * ```js
 * // Call the function to gather value from form and send to server with POST request
 * sendPost()
 * ```
 */
export function sendPost() {
  const form = document.querySelector("#send-post");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = event.target;
    const method = formData.method;
    const title = formData.title.value;
    const body = formData.body.value;
    const tagsString = formData.tags.value;
    const tags = tagsString.split(",");
    const media = formData.media.value;
    const post = {
      title,
      body,
      tags,
      media,
    };
    forwardPost(API_SEND_URL, post, method);
  });
}
