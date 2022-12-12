import { renderProfile } from "./renderProfile.mjs";
import { renderProfilePosts } from "../posts/renderProfilePosts.mjs";
import { getMyProfile } from "../handlers/getProfile.mjs";
import * as storage from "../storage/index.mjs";
import { API_PROFILE_URL } from "../auth/constants.mjs";
import { getPost } from "../handlers/getPost.mjs";
import { toggleLoadingIndicator } from "../loader/loadingIndicator.mjs";
import * as run from "../posts/listeners.mjs";

/**
 * //Function that gets the name-property from localStorage and adds it in URL to get the correct profile from the API
 * then uses the renderProfile() function to display the profile
 * @example
 * getUserProfile();
 */
export async function getUserProfile() {
  const user = storage.load("profile").name;
  const API_USERPROFILE_URL = `${API_PROFILE_URL}${user}?_followers=true&_following=true&_posts=true`;
  const profiles = await getMyProfile(API_USERPROFILE_URL);
  renderProfile(profiles);
}
/**
 * //Function that gets the name-property from localStorage and adds it in URL to get the personal posts from that
 * profile from the API
 * then uses the renderProfilePosts() function to display the posts
 * @example
 * getProfilePosts();
 */
export async function getProfilePosts() {
  const user = storage.load("profile").name;
  const API_PROFILEPOSTS_URL = `${API_PROFILE_URL}${user}/posts?_author=true&_reactions=true&_comments=true`;
  const profilePosts = await getPost(API_PROFILEPOSTS_URL);
  renderProfilePosts(profilePosts);
  toggleLoadingIndicator(profilePosts);
  run.listeners();
}
