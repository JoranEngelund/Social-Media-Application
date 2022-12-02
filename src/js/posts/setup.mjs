import { getPosts } from "../handlers/getPosts.mjs";
import { renderPost } from "./render.mjs";
import { API_POSTS_URL } from "../auth/constants.mjs";

export async function setup() {
  const posts = await getPosts(API_POSTS_URL);
  console.log(posts);
  renderPost(posts);
}
