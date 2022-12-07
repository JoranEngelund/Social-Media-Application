import { renderProfile } from "./renderProfile.mjs";
import { getMyProfile } from "../handlers/getProfile.mjs";
import * as storage from "../storage/index.mjs";
import { getPost } from "../handlers/getPost.mjs";
import { renderPost } from "../posts/render.mjs";
import * as run from "../posts/listeners.mjs";

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

export async function setup() {
  const user = storage.load("profile").name;
  const postURL = `https://api.noroff.dev/api/v1/social/profiles/${user}/posts?_author=true&_reactions=true&_comments=true`;
  const profilePosts = await getPost(postURL);
  renderPost(profilePosts);
  run.listeners();
}

setup();
