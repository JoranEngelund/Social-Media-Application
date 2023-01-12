import { followUser } from "../handlers/followUser.mjs";
import { API_PROFILE_URL } from "../auth/constants.mjs";

/**
 * // Function that gets the name property from the queryString and passes it in the URL sent to the endpoint
 * then uses the followUser() function to send the request to unfollow profile
 * @example
 * //
 * unFollowProfile();
 */
export function unfollowProfile() {
  const unFollowBtn = document.querySelector("#unfollow-btn");
  unFollowBtn.addEventListener("click", (event) => {
    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    const user = params.get("name");
    const API_FOLLOW_URL = `${API_PROFILE_URL}${user}/unfollow`;
    followUser(API_FOLLOW_URL);
  });
}
