import { followUser } from "../handlers/followUser.mjs";
import { API_PROFILE_URL } from "../auth/constants.mjs";

export function followProfile() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const user = params.get("name");
  const API_FOLLOW_URL = `${API_PROFILE_URL}/api/v1/social/profiles/${user}/follow`;
  const followBtn = document.querySelector("#follow-btn");

  followBtn.addEventListener("click", (event) => {
    console.log(API_FOLLOW_URL);
    event.preventDefault();
    followUser(API_FOLLOW_URL);
  });
}

followProfile();
