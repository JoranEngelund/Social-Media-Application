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
    const loginCard = document.querySelector("#login-card");
    loginCard.innerHTML += `
                                  <p class="card-text mb-1">
                                    There seems to be some issues with your login information
                                  </p>
                                  <p class="card-text mb-3">
                                    Please try with other information or 
                                    <a class="text-decoration-underline"
                                    href="registration.html">
                                      Create an account
                                    </a>
                                  </p>
                                  `;
  } else if (response.ok) {
    window.location.replace("/profile.html");
  }
}
