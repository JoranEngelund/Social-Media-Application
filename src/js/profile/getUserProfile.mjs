import { renderProfile } from "./renderProfile.mjs";
import { renderProfilePosts } from "../posts/renderProfilePosts.mjs";
import { getMyProfile } from "../handlers/getProfile.mjs";
import * as storage from "../storage/index.mjs";
import { API_PROFILE_URL } from "../auth/constants.mjs";
import { getPost } from "../handlers/getPost.mjs";

export async function getUserProfile() {
  const user = storage.load("profile").name;
  const API_USERPROFILE_URL = `https://api.noroff.dev/api/v1/social/profiles/${user}?_followers=true&_following=true&_posts=true`;
  const profiles = await getMyProfile(API_USERPROFILE_URL);
  renderProfile(profiles);
}

export async function getProfilePosts() {
  const user = storage.load("profile").name;
  const API_PROFILEPOSTS_URL = `${API_PROFILE_URL}${user}/posts?_author=true&_reactions=true&_comments=true`;
  const profilePosts = await getPost(API_PROFILEPOSTS_URL);
  renderProfilePosts(profilePosts);
}
