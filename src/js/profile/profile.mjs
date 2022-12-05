import { createProfile } from "../posts/templates/createProfile.mjs";
import * as storage from "../storage/index.mjs";

/**
 * // Async function that sends get request with authorization token to retrieve profile from API server
 * @param {*} url
 * @returns
 *  ```js
 * // Call the function and pass in API-url as argument
 * getMyProfile(url);
 * ```
 */
export async function getMyProfile(url) {
  try {
    const token = storage.load("accessToken");

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

/**
 * //Function that sets up profile using getMyProfile() fetch and initializing renderProfile()
 * @example
 * ```js
 * //call function to initialize profile setup
 * setupProfile()
 * ```
 */
export async function setupProfile() {
  const user = storage.load("profile").name;
  const API_PROFILE_URL = `https://api.noroff.dev/api/v1/social/profiles/${user}?_followers=true&_following=true&_posts=true`;
  const profile = await getMyProfile(API_PROFILE_URL);
  renderProfile(profile);
}

/**
 * //Function that destructures profile object and pass in values as arguments in createProfile() template function
 *
 * @param {*} profile
 * @example
 * ```js
 * // Call function to initialize creation of profile
 * renderProfile(profile)
 * ```
 */
function renderProfile(profile) {
  console.log(profile);
  const { name, avatar, email, banner, followers, following } = profile;
  createProfile(name, avatar, email, banner, followers, following);
  const followBtn = document.querySelector(".follow-btn");
  followBtn.classList.add("d-none");
}
setupProfile();
