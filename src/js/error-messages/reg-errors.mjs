/**
 * // Function that checks whether a http request returned a false or true response, and then displayes either validation message og error message based on the return value from the request
 * @param {object} response // Checks if there were any false returns from the ok property in the http request
 * @example
 * ```
 * // Call the function and pass in the the response object from a fetch call
 * registrationError(response);
 * ```
 */
export function registrationError(response) {
  if (!response.ok) {
    const registerCard = document.querySelector("#register-card");
    registerCard.innerHTML = "";
    registerCard.innerHTML = `<h1 class="card-title mt-3 mb-4">Register</h1>
                                  <p class="card-text mb-4">
                                    Profile already exists!
                                  </p>
                                  <p class="card-text mb-3">
                                    Please try another account
                                  </p>
                                  <a href="./registration.html"
                                    class="btn btn-primary mt-4 mb-3 px-8 shadow text-uppercase btn-login">
                                    Try again
                                  </a>
                                  `;
  } else if (response.ok) {
    const registerCard = document.querySelector("#register-card");
    registerCard.innerHTML = "";
    registerCard.innerHTML = `<h1 class="card-title mt-3 mb-4">Success!</h1>
                                  <p class="card-text mb-2">
                                    Your account has been created
                                  </p>
                                  <p class="card-text mb-3">
                                    Please proceed to the login section
                                  </p>
                                  <a href="./index.html"
                                    class="btn btn-primary mt-4 mb-3 px-8 shadow text-uppercase btn-login">
                                    login
                                  </a>`;
  }
}
