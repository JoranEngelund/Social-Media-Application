import { API_BASE_URL } from "../auth/constants.mjs";
import { editProfileMedia } from "../handlers/editProfileMedia.mjs";
import * as storage from "../storage/index.mjs";

/**
 * // function that retrieves edit-post-form,  from a post and sends it into a forEach with a addEventListener, which sends the form data to api server and edit the post selected
 * @example 
 * ```js
 * // Call the function in a scope where it can access .edit-form (form) elements
    editListener();
 * ```
 */
export function editProfileListener() {
  const user = storage.load("profile").name;
  const editProfileForm = document.getElementById("update-profile-media");
  editProfileForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = event.target;
    const method = "PUT";
    const avatar = formData.avatar;
    const banner = formData.banner;
    const editPath = `/social/profiles/${user}/media`;
    const API_EDIT_URL = `${API_BASE_URL}${editPath}`;
    const profileMedia = {
      avatar,
      banner,
    };
    console.log(profileMedia);
    editProfileMedia(API_EDIT_URL, profileMedia, method);
  });
}
