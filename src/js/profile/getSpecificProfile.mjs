import { API_PROFILE_URL } from "../auth/constants.mjs";
import { getMyProfile } from "../handlers/getProfile.mjs";
import { renderProfile } from "./renderProfile.mjs";
import { renderProfilePosts } from "../posts/renderProfilePosts.mjs";
import { getPost } from "../handlers/getPost.mjs";
import { toggleLoadingIndicator } from "../loader/loadingIndicator.mjs";
import { commentListener } from "../posts/comment.mjs";
import { reactionListener } from "../posts/reaction.mjs";

/** //Function that gets the name-property from queryString and adds it in URL to get the correct profile from the API
 * then uses the renderProfile() function to display the profile
 * @example
 * getSpecificProfile();
 */
export async function getSpecificProfile() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const name = params.get("name");
  const PROFILE_URL = `${API_PROFILE_URL}${name}?_followers=true&_following=true`;
  const profile = await getMyProfile(PROFILE_URL);
  renderProfile(profile);
}
/** Function that gets the name-property from queryString and adds it in URL to get the personal posts from that
 * profile from the API
 * then uses the renderProfilePosts() function to display the posts
 * @example
 * getSpecificProfilePosts();
 */
export async function getSpecificProfilePosts() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const user = params.get("name");
  const SPECIFIC_PROFILEPOST_URL = `${API_PROFILE_URL}${user}/posts?_author=true&_reactions=true&_comments=true`;
  const profilePosts = await getPost(SPECIFIC_PROFILEPOST_URL);
  renderProfilePosts(profilePosts);
  toggleLoadingIndicator(profilePosts);
  commentListener();
  reactionListener();
}
