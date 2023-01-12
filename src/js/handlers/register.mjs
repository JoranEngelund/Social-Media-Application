import { registrationError } from "../error-messages/reg-errors.mjs";

/**
 * // Async fetch function that sends a HTTP POST request to the API server,
 *  with an object with the properties of a registered user
 * @param {string} url // string of the API url
 * @param {object} profile // Object of user properties
 * @param {string} method // Type of method from the form
 * @example
 * ```js
 * //
 * register(url, profile, POST);
 * // returns {id: , name: '', email: '', banner: '', avatar: ''}
 * ```
 */
export async function register(url, profile, method) {
  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(profile),
    });
    const json = await response.json();
    registrationError(response);
  } catch (error) {
    console.log(error);
  }
}
