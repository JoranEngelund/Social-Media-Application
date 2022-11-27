/**
 * // Error handler that checks if response was sent correctly
 * @param {object} response // response body when sending post request to server
 * @example
 * ```js
 * // call the function and pass in the response from the fetch call
 * submitPostError(response)
 * ```
 */
export function submitPostError(response) {
  if (!response.ok) {
    const sendPostForm = document.querySelector("#form-error");
    formError.classList.remove("d-none");
    sendPostForm.innerHTML += `
                                   <p class="card-text mb-1">
                                    There seems to be some issues with submitting the post
                                  </p>
                                  <p class="card-text mb-3">
                                    Please try again or return later 
                                  </p>
                                  `;
  }
}

/**
 * // Error handler that checks if response was sent correctly
 * @param {*} error // response body when sending post request to server
 * @example
 * ```js
 * // call the function and pass in the response from the fetch call
 * submitPostFault(error)
 * ```
 */
export function submitPostFault(error) {
  if (error) {
    const formError = document.querySelector("#form-error");
    formError.classList.remove("d-none");
    formError.innerHTML += `
                                   <p class="card-text mb-1">
                                    There seems to be some issues with submitting the post
                                  </p>
                                  <p class="card-text mb-3">
                                    Please try again or return later 
                                  </p>
                                  `;
  }
}
