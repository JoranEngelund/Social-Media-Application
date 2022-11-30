import * as storage from "../../storage/index.mjs";

/**
 * // createPosts function that generates and displays dynamic generated html to render posts
 * @param {string} title // Title of post
 * @param {*} created // Date when post was created
 * @param {number} id // id of post
 * @param {string} media // url of media sent with post
 * @param {number} updated // Date when post was updated
 * @param {string} body // body text for posts
 * @param {*} tags // Array of tags from post
 * @param {string} name // Name of owner who posted
 * @param {string} avatar // url of avatar for owner of post
 * @param {object} comments // Array of object with all comments for the post
 * @param {number} commentCount // number of comments on post
 * @param {number} reactionCount // number of reactions on post
 * @param {object} reactions // array of object with all reactions for the post
 * @example
 * ```js
 * // call the function and pass in the arguments you want to use
 * createPosts(title, created, id, media, updated, body, tags, name, avatar, comments, commentCount, reactionCount, reactions)
 * ```
 */
export function createPosts(
  title,
  created,
  id,
  media,
  updated,
  body,
  tags,
  name,
  avatar,
  comments,
  commentCount,
  reactionCount,
  reactions
) {
  let commentsHtml = "";
  comments.forEach(({ body: commentBody, owner, author: commentsOwner }) => {
    const { avatar: ownerAvatar } = commentsOwner;
    let ownerImage = ownerAvatar;
    if (ownerImage === null || ownerImage === "") {
      ownerImage = "/assets/images/profile-image.png";
    } else {
      ownerImage = ownerAvatar;
    }
    commentsHtml += `<div class="card-text">
                     <div class="d-flex mt-2 ms-2 mb-2">
                  <img
                    src="${ownerImage}"
                    alt="profile-picture of user"
                    class="card-img-top"
                  />
                  <h3 class="card-title custom-title ms-3 align-self-center">
                    <a href="/profile-specific.html?name=${owner}">${owner}</a>
                  </h3>
                </div>
                      <div class="d-flex flex-row ms-5">
                        <p class="comment bg-secondary shadow">
                          ${commentBody}
                        </p>
                      </div>
                    </div>`;
  });

  let reactionHtml = "";
  reactions.forEach(({ symbol, count }) => {
    reactionHtml += `<p class="card-text">${symbol}(${count})</p>`;
  });

  let profileImage = avatar;
  if (profileImage === null || profileImage === "") {
    profileImage = "/assets/images/profile-image.png";
  } else {
    profileImage = avatar;
  }

  const userName = storage.load("profile").name;
  let editDeleteHtml = "";
  if (userName === name) {
    editDeleteHtml = `<div class="edit-delete-post d-flex gap-3 text-decoration-none ms-2 mb-0">
                      <p class="card-text custom-text">
                        <a id="${id}"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#updatePostModal"
                          >Edit</a
                        >
                      </p>
                      <p class="card-text custom-text">
                        <a id="${id}" href="#">Delete</a>
                      </p>
                    </div>`;
  } else {
    editDeleteHtml = "";
  }

  const convertedDate = new Date(created).toLocaleDateString();
  const postContainer = document.querySelector("#post-container");
  postContainer.innerHTML += `<div class="post card mb-5 shadow">
                <p class="post-time me-2 mt-2 text-end">${convertedDate} </p>
                <div class="d-flex mt-2 ms-2 mb-4">
                  <img
                    src="${profileImage}"
                    alt="profile-picture of user"
                    class="card-img-top"
                  />
                  <h3 class="card-title custom-title ms-3 align-self-center">
                    <a href="/profile-specific.html?name=${name}">${name}</a>
                  </h3>
                </div>
                <div class="card-body">
                  <h4 class="card-title mb-3 mt-2">${title}</h4>
                  <p class="card-text mb-4">
                   ${body}
                  </p>
                  <img
                    src="${media}"
                    alt=""
                    class="card-img-bottom mb-4 align-items-center"
                  />
                  <div class="d-flex justify-content-between">
                    <div class="d-flex gap-3 text-decoration-none mb-0">
                      <p class="card-text custom-text">
                      <a
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseReaction${id}"
                          aria-expanded="true"
                          aria-controls="collapseReaction${id}"
                          href="collapseReaction${id}" 
                         class="me-2" href="#">Likes (${reactionCount})</a>
                      </p>
                      <p class="card-text custom-text">
                        <a
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseComment${id}"
                          aria-expanded="true"
                          aria-controls="collapseComment${id}"
                          href="collapseComment${id}"
                          >Comments (${commentCount})</a
                        >
                      </p>
                      <p class="card-text custom-text view-post">
                        <a href="post-specific.html?id=${id}">View Post</a>
                      </p>
                    </div>
                    ${editDeleteHtml}
                  </div>
                </div>
                <div class="collapse collapse-comment" id="collapseReaction${id}">
                  <div class="card card-body mt-2 d-flex flex-row">
                    ${reactionHtml}
                  </div>
                </div>
                <div class="collapse collapse-comment" id="collapseComment${id}">
                  <div class="card card-body mt-2">
                    <form method="POST" class="comment-form" id="${id}">
                      <div class="mb-3">
                        <div>
                          <img
                            src="/assets/images/profile-image.png"
                            alt="profile-picture of user"
                            class="card-img-top"
                          />
                        </div>
                        <div class="d-flex flex-row justify-content-center">
                          <textarea
                            name="body"
                            id="comment"
                            class="form-control post-input shadow mb-3 me-2"
                            placeholder="What do you want to comment?"
                            required
                          ></textarea>
                          <button
                            type="submit"
                            class="btn btn-primary mt-4 mb-3 text-center btn-custom shadow"
                          >
                            Comment
                          </button>
                        </div>
                      </div>
                    </form>
                    ${commentsHtml}
                  </div>
                </div>
              </div>`;
}
