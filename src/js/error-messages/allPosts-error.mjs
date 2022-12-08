/**
 * // Function that checks whether a http request returned a false or true response, and then displayes either validation message og error message based on the return value from the request
 * @param {object} response // Checks if there were any false returns from the ok property in the http request
 * @example
 * ```
 * // Call the function and pass in the the response object from a fetch call
 * responseError(response);
 * ```
 */
export function responseError(response) {
  if (!response.ok) {
    const postContainer = document.querySelector("#post-container");
    postContainer.innerHTML = "";
    postContainer.innerHTML = `
                                  <p class="card-text mb-4">
                                    An error has occured, please refresh the page or try again later
                                  </p>
                                  <p class="card-text mb-3">
                                    Please try another account
                                  </p>
                                  <a href="./home.html"
                                    class="btn btn-primary mt-4 mb-3 px-8 shadow text-uppercase btn-login">
                                    Try again
                                  </a>
                                  `;
  }
}

/**
 * // Function that checks whether a http request returned a false or true response, and then displayes either validation message og error message based on the return value from the request
 * @param {error} error // Checks if there were any catched errors in the fetch call
 * @example
 * ```
 * // Call the function and pass in the error from a catch block to display error-message
 * allPostsError(error);
 * ```
 */
export function allPostsError(error) {
  if (error) {
    const postContainer = document.querySelector("#post-container");
    postContainer.innerHTML = "";
    postContainer.innerHTML = `<h2 class="custom-label mt-3">Feed</h2>
                                  <p class="card-text mb-4">
                                    An error has occured, please refresh the page or try again later
                                  </p>
                                  <a href="./home.html"
                                    class="btn btn-primary mt-4 mb-3 px-8 shadow text-uppercase btn-login">
                                    Refresh
                                  </a>
                                  `;
  }
}
