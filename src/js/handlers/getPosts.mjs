import * as storage from "../storage/index.mjs";
import { createPosts } from "../posts/templates/createPost.mjs";
//import { createComment } from "../posts/templates/createPost.mjs";

export async function getPosts(url) {
  try {
    const token = storage.load("accessToken");
    console.log(token);
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const posts = await response.json();
    //console.log(json);
    posts.forEach(
      ({
        title,
        created,
        id,
        media,
        updated,
        body,
        tags,
        author,
        comments,
      }) => {
        const { name, avatar } = author;
        createPosts(
          title,
          created,
          id,
          media,
          updated,
          body,
          tags,
          name,
          avatar,
          comments
        );
      }
    );
  } catch (error) {
    console.log(error);
  }
}
