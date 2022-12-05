import * as storage from "../../storage/index.mjs";

export function createProfile(
  name,
  avatar,
  email,
  banner,
  followers,
  following
) {
  const profileInfo = document.querySelector(".profile-info");
  const followerHtml = document.querySelector(".followers");
  const followingHtml = document.querySelector(".following");

  profileInfo.innerHTML = `<img
    src="${avatar}"
    alt="profile-picture of user"
    class="card-img-top"
    />
    </div>
    <h1 class="ms-5 align-self-center profile-name">${name}</h1>`;
  followerHtml.innerHTML = "";
  followers.forEach(({ name: followerName, avatar: followerAvatar }) => {
    let followerImage = followerAvatar;
    if (followerImage === null || followerImage === "") {
      followerImage = "/assets/images/profile-image.png";
    } else {
      followerImage = followerAvatar;
    }
    followerHtml.innerHTML += `<a href="#">
                    <img
                      src="${followerAvatar}"
                      alt="profile-picture of user"
                      class="card-img-top m-1"
                      title=${followerName}
                    />
                  </a>`;
  });
  followingHtml.innerHTML = "";
  following.forEach(({ name: followingName, avatar: followingAvatar }) => {
    let followingImage = followingAvatar;
    if (followingImage === null || followingImage === "") {
      followerImage = "/assets/images/profile-image.png";
    } else {
      followingImage = followingAvatar;
    }
    followerHtml.innerHTML += `<a href="#">
                    <img
                      src="${followingAvatar}"
                      alt="profile-picture of user"
                      class="card-img-top m-1"
                      title=${followingName}
                    />
                  </a>`;
  });
}
