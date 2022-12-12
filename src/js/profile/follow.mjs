import { followUser } from "../handlers/followUser.mjs";
import { API_PROFILE_URL } from "../auth/constants.mjs";
import { unFollowUser } from "../handlers/followUser.mjs";
import * as storage from "../storage/index.mjs";

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

export function unfollowProfile() {
  const unFollowBtn = document.querySelector("#unfollow-btn");
  unFollowBtn.addEventListener("click", (event) => {
    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    const user = params.get("name");
    const API_FOLLOW_URL = `${API_PROFILE_URL}${user}/unfollow`;
    unFollowUser(API_FOLLOW_URL);
  });
}

export function hideFollowBtn() {
  const followBtn = document.querySelector("#follow-btn");
  const followingName = storage.load("Following");
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const profileName = params.get("name");
  followingName.forEach(({ name: followingUserName }) => {
    if (followingUserName === profileName) {
      followBtn.classList.add("d-none");
    }
  });
}

followProfile();
unfollowProfile();
hideFollowBtn();
