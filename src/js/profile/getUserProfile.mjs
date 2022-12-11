import { renderProfile } from "./renderProfile.mjs";
import { getMyProfile } from "../handlers/getProfile.mjs";
import * as storage from "../storage/index.mjs";

export async function loadProfile() {
  const user = storage.load("profile").name;
  const API_PROFILE_URL = `https://api.noroff.dev/api/v1/social/profiles/${user}?_followers=true&_following=true&_posts=true`;
  const profiles = await getMyProfile(API_PROFILE_URL);
  renderProfile(profiles);
}
