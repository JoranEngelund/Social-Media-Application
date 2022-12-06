import { renderProfile } from "./renderProfile.mjs";
import { getMyProfile } from "../handlers/getProfile.mjs";
import * as storage from "../storage/index.mjs";
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
