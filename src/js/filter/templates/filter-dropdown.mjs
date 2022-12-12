/**
 * // function that retrieves all tags from api call, maps it into a new array and generates it dynamically in a dropdown meny
 * @param {string} tags // tags rendered from api call
 * @example
 * ```js
 * // call the filterTemplateTags function in a scope where it can access tags arrays
 * filterTemplateTags(tags);
 * ```
 */
export function filterTemplateTags(posts) {
  posts.forEach(({ tags }) => {
    tags.map((tag) => {
      if (tag) {
        const filterMenu = document.querySelector(".tags");
        filterMenu.innerHTML += `<li><a class="dropdown-item" href="/post-filter.html?tag=${tag}">${tag}</a></li>`;
      }
    });
  });
}
