import { profileListeners } from "./listeners.mjs";
import { getSpecificProfile } from "./getSpecificProfile.mjs";
import { getSpecificProfilePosts } from "./getSpecificProfile.mjs";
import { getProfilePosts, getUserProfile } from "./getUserProfile.mjs";

/**
 * //Function that sets up specific profile using getSpecificProfile() and getSpecificProfilePosts() to fetch
 * profile data from the API
 * @example
 * //call function to initialize profile setup
 * setupSpecificProfile()
 */
export function setupSpecificProfile() {
  getSpecificProfile();
  getSpecificProfilePosts();
}
/**
 * //Function that sets up specific profile using getSpecificProfile() and getSpecificProfilePosts() to fetch
 * profile data from the API
 * @example
 * //call function to initialize profile setup
 * setupProfile()
 */
export async function setupProfile() {
  getUserProfile();
  getProfilePosts();
  profileListeners();
}
