import { API_POSTS_URL } from "../auth/constants.mjs";
import { getPosts } from "../handlers/getPosts.mjs";

export function displayPosts() {
  getPosts(API_POSTS_URL);
}
