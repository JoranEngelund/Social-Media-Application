/**
 * // createProfile function that generates and displays dynamic generated html to render users profile
 * @param {*} name
 * @param {*} avatar
 * @param {*} email
 * @param {*} banner
 * @param {*} followers
 * @param {*} following
 * * ```js
 * // call the function and pass in the arguments you want to use
 * createProfile(name, avatar, email, banner, followers, following)
 * ```
 */

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
    followingHtml.innerHTML += `<a href="#">
                    <img
                      src="${followingAvatar}"
                      alt="profile-picture of user"
                      class="card-img-top m-1"
                      title=${followingName}
                    />
                  </a>`;
  });
}
