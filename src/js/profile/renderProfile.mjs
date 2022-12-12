import { createProfile } from "./templates/createProfile.mjs";

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
export function renderProfile(profile) {
  const { name, avatar, email, banner, followers, following } = profile;
  createProfile(name, avatar, email, banner, followers, following);
}
