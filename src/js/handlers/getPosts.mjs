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
    const json = await response.json();
    //console.log(json);
    json.forEach(
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

        /*Display comments below*/
        const [...allComments] = comments;
        //console.log(allComments);
        allComments.forEach(({ ...comment }) => {
          const { body: commentBody, owner, postId: commentId } = comment;
          //const postContainer = document.querySelector("#post-container");
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
            owner,
            commentBody,
            commentId
          );
        });
      }
    );
  } catch (error) {
    console.log(error);
  }
}
