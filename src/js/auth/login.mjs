import { API_LOGIN_URL } from "./constants.mjs";
import { login } from "../handlers/login.mjs";

/**
 * // loginUser function that retrieves data from a login-form, creates an object from input values, and passes it into a async function that sends the object to the API server with a method request
 * @example
 * // Call the function
 * ```js
 * loginUser()
 * ```
 * // Returns
 * ```js
 * {
 * "name": "my_username",
 *  email": "first.last@stud.noroff.no",
 * "avatar": "https://example.com/avatar.jpg",
 * "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...."
 * }
 * ```
 *
 */
export function loginUser() {
  const form = document.querySelector("#login-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = event.target;
    const method = formData.method;
    const email = formData.email.value;
    const password = formData.password.value;
    const profile = {
      email: email,
      password: password,
    };
    login(API_LOGIN_URL, profile, method);
  });
}
