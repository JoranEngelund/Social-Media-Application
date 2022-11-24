import { API_REG_URL } from "./constants.mjs";
import { register } from "../handlers/register.mjs";
/**
 * function to retrieve values from a form and sends a HTTP POST request to the server
 * the request contains a object that is created from the form.
 * @example
 * ```js
 * // call the function
 * registerUser();
 * ```
 */
export function registerUser() {
  const form = document.querySelector("#reg-form");
  console.log(form);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const method = form.method;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    const banner = form.banner.value;
    const avatar = form.avatar.value;
    const profile = {
      name: name,
      email: email,
      password: password,
      banner: banner,
      avatar: avatar,
    };
    register(API_REG_URL, profile, method);
    console.log(register);
  });
}
