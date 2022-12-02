import { renderPost } from "../posts/render.mjs";

export function setSearchListener(posts) {
  const search = document.querySelector(".search-bar");
  search.oninput = function (event) {
    const searchValue = event.target.value.trim().toLowerCase();
    const filteredPosts = filterPosts(searchValue, posts);
    renderPost(filteredPosts);
  };
}

function filterPosts(searchValue, posts) {
  const postContainer = document.getElementById("post-container");
  postContainer.innerHTML = "";
  const filteredPosts = posts.filter(function (postData) {
    if (postData.title.toLowerCase().includes(searchValue)) {
      return true;
    }
  });

  return filteredPosts;
}
