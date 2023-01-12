import { followUser } from "../handlers/followUser.mjs";
import { API_PROFILE_URL } from "../auth/constants.mjs";

/**
 * // Function that gets the name property from the queryString and passes it in the URL sent to the endpoint
 * then uses the followUser() function to send the request to follow profile
 * @example
 * followProfile();
 */
export function followProfile() {
  const followBtn = document.querySelector("#follow-btn");
  followBtn.addEventListener("click", (event) => {
    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    const user = params.get("name");
    const API_FOLLOW_URL = `${API_PROFILE_URL}${user}/follow`;
    followUser(API_FOLLOW_URL);
  });
}
