import * as run from "../posts/listeners.mjs";
import { profileListeners } from "./listeners.mjs";
import { getSpecificProfile } from "./getSpecificProfile.mjs";
import { getSpecificProfilePosts } from "./getSpecificProfile.mjs";
import { getProfilePosts, getUserProfile } from "./getUserProfile.mjs";

/**
 * //Function that sets up profile using getMyProfile() fetch and initializing renderProfile()
 * @example
 * ```js
 * //call function to initialize profile setup
 * setupProfile()
 * ```
 */

export function setupSpecificProfile() {
  getSpecificProfile();
  getSpecificProfilePosts();
}

export async function setupProfile() {
  getUserProfile();
  getProfilePosts();
  run.listeners();
  profileListeners();
}
