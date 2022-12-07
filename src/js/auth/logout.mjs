import * as storage from "../storage/index.mjs";

/**
 * // Function that listens to user click on "signout" link in navigation, if link is clicked, the localStorage gets cleared of items
 * @example
 * ```js
 * // To clear the localStorage when sign out link is clicked, which brings the user to the login page, call the signout() function
 * signout();
 * ```
 */
export function signout() {
  const signout = document.querySelectorAll(".sign-out");
  signout.forEach((linkElement) => {
    const logout = linkElement;
    logout.addEventListener("click", (event) => {
      event.preventDefault;
      storage.clear();
    });
  });
}
