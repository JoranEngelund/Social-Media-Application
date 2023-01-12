import * as storage from "../storage/index.mjs";

/**
 * // Function that checks whether a http request returned a false or true response, and then displayes either validation message og error message based on the return value from the request
 * @param {object} response // Checks if there were any false returns from the ok property in the http request
 * @example
 * ```
 * // Call the function and pass in the the response object from a fetch call
 * registrationError(response);
 * ```
 */
export function loginError(response) {
  if (!response.ok) {
    storage.clear();
    const loginCard = document.querySelector("#login-card");
    loginCard.innerHTML = "";
    loginCard.innerHTML += `<h1 class="card-title mt-3">Login</h1>
                                  <p class="card-text mb-1 mt-4 ">
                                    There seems to be some issues with your login credentials. Please try again with different information
                                  </p>
                                  <a href="/index.html"
                                    class="btn btn-primary mt-4 mb-3 px-8 shadow text-uppercase btn-login">
                                    Try again
                                  </a>
                                  <p class="card-text mb-3">
                                    If you haven't created an account, please do so
                                  </p>
                                  <a class="card text text-decoration-underline mb-3"
                                    href="registration.html">
                                      Create an account
                                    </a>
                                  `;
  } else if (response.ok) {
    window.location.replace("/profile.html");
  }
}
