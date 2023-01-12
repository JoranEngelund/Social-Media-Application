import { renderPost } from "../posts/render.mjs";

/**
 * // Function that registers search value and gets the array from the filterPosts() function
 * // Then runs the renderPost function with the new array
 * @param {*} posts
 * @example
 * //
 * ```js
 * // call the function setSearchListener to register searchvalue and get an array of filtered posts
 * setSearchListener(posts);
 * ```
 *  */
export function setSearchListener(posts) {
  const search = document.querySelector(".search-bar");
  search.oninput = function (event) {
    const searchValue = event.target.value.trim().toLowerCase();
    const filteredPosts = filterPosts(searchValue, posts);
    renderPost(filteredPosts);
  };
}

/**
 * // Function that takes the searchvalue as param and uses the filter method to return a new array of filtered posts
 * // Empties current HTML to return new results with the renderPost() function through setSearchListener()
 * @param {*} searchValue
 * @param {*} posts
 * @returns
 * @example
 * ```js
 * //Call the function using target value and posts as arguments
 * filterPosts(searchValue, posts)
 * return true;
 * ```
 */
function filterPosts(searchValue, posts) {
  const postContainer = document.getElementById("post-container");
  postContainer.innerHTML = "";
  const filteredPosts = posts.filter(function (postData) {
    if (
      postData.title.toLowerCase().includes(searchValue) ||
      postData.author.name.toLowerCase().includes(searchValue)
    ) {
      return true;
    }
  });

  return filteredPosts;
}
