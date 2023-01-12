import * as storage from "../../storage/index.mjs";
import { placeholderImg } from "../../error-messages/onerror.mjs";

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

    const userName = storage.load("profile").name;
    let profileLink = ``;
    if (owner === userName) {
      profileLink = `<a href="/profile.html?name=${owner}">${owner}</a>`;
    } else {
      profileLink = `<a href="/profile-specific.html?name=${owner}">${owner}</a>`;
    }

    commentsHtml += `<div class="card-text">
                     <div class="d-flex mt-2 ms-2 mb-2">
                  <img
                    src="${ownerImage}"
                    alt="profile-picture of user"
                    onerror="this.onerror=null;this.src='${placeholderImg}';"
                    class="card-img-top"
                  />
                  <h3 class="card-title custom-title ms-3 align-self-center">
                    ${profileLink}
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
    reactionHtml += `
    <p class="card-text mb-2 send-reaction" id="${id}"><a id="${id}" href="#">${symbol}</a></p><p class="card-text me-2">(${count})</p>`;
  });

  let profileImage = avatar;
  if (profileImage === null || profileImage === "") {
    profileImage = "/assets/images/profile-image.png";
  } else {
    profileImage = avatar;
  }

  const userName = storage.load("profile").name;
  const userImage = storage.load("profile").avatar;
  let userAvatar = userImage;
  if (userAvatar === null || userAvatar === "") {
    userAvatar = "/assets/images/profile-image.png";
  } else {
    userAvatar = userImage;
  }

  let editDeleteHtml = "";
  if (userName === name) {
    editDeleteHtml = `<div class="edit-delete-post d-flex gap-3 text-decoration-none ms-2 mb-0 post-components">
                      <p class="card-text custom-text">
                        <a class="edit-post"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#updatePostModal${id}"
                          >Edit</a
                        >
                      </p>
                      <p class="card-text custom-text">
                        <a class="delete-post" id="${id}" href="#">Delete</a>
                      </p>
                    </div>`;
  } else {
    editDeleteHtml = "";
  }

  let profileLink = ``;
  if (name === userName) {
    profileLink = `<a href="/profile.html?name=${name}">${name}</a>`;
  } else {
    profileLink = `<a href="/profile-specific.html?name=${name}">${name}</a>`;
  }

  const convertedDate = new Date(created).toLocaleDateString();
  const postContainer = document.querySelector("#post-container");
  postContainer.innerHTML += `<div class="post card mb-5 shadow">
                <p class="post-time me-2 mt-2 text-end">${convertedDate} </p>
                <div class="d-flex mt-2 ms-2 mb-4">
                  <img
                    src="${profileImage}"
                    alt="profile-picture of user"
                    onerror="this.onerror=null;this.src='${placeholderImg}';"
                    class="card-img-top"
                  />
                  <h3 class="card-title custom-title ms-3 align-self-center">
                    ${profileLink}
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
                    <p class="card-text mb-2 me-2">Send a reaction: 
                      <a class="send-reaction" id="${id}" title="Thumbs-up Emoji" href="#">&#128077;</a>
                      <a class="send-reaction" id="${id}" title="Read Heart Emoji" href="#">❤️</a>
                      <a class="send-reaction" id="${id}" title="Grinning Face Emoji" href="#">&#128512;</a>
                      <a class="send-reaction" id="${id}" title="Beaming Face with Smiling Eyes Emoji" href="#">&#128513;</a>
                      <a class="send-reaction" id="${id}" title="Face with Tears of Joy Emoji" href="#">&#128514;</a>
                      <a class="send-reaction" id="${id}" title="Grinning Face with Sweat Emoji" href="#">&#128517;</a>
                      <a class="send-reaction" id="${id}" title="Smiling Face with Halo Emoji" href="#">&#128519;</a>
                      <a class="send-reaction" id="${id}" title="Smiling Face with Horns Emoji" href="#">&#128520;</a>
                      <a class="send-reaction" id="${id}" title="Winking Face Emoji" href="#">&#128521;</a>
                      <a class="send-reaction" id="${id}" title="Smiling Face with Smiling Eyes Emoji" href="#">&#128522;</a>
                      <a class="send-reaction" id="${id}" title="Face Savoring Food Emoji" href="#">&#128523;</a>
                      <a class="send-reaction" id="${id}" title="Smiling Face with Heart-Eyes Emoji" href="#">&#128525;</a>
                      <a class="send-reaction" id="${id}" title="Smiling Face with Sunglasses Emoji" href="#">&#128526;</a>
                      <a class="send-reaction" id="${id}" title="Neutral Face Emoji" href="#">&#128528;</a>
                      <a class="send-reaction" id="${id}" title="Face Screaming in Fear Emoji" href="#">&#128561;</a>
                      <a class="send-reaction" id="${id}" title="Star-Struck Emoji" href="#">&#129321;</a>
                      <a class="send-reaction" id="${id}" title="Drooling Face Emoji" href="#">&#129316;</a>
                      <a class="send-reaction" id="${id}" title="Face with Hand Over Mouth Emoji" href="#">&#129325;</a>
                      <a class="send-reaction" id="${id}" title="Exploding Head Emoji" href="#">&#129327;</a>
                      <a class="send-reaction" id="${id}" title="Face with Monocle Emoji" href="#">&#129488;</a>
                    </p>
                  </div>
                </div>
                <div class="collapse collapse-comment" id="collapseReaction${id}">
                  <div class="card card-body mt-2 d-flex flex-row reaction-container">
                    ${reactionHtml}
                  </div>
                </div>
                <div class="collapse collapse-comment" id="collapseComment${id}">
                  <div class="card card-body mt-2">
                    <form method="POST" class="comment-form" id="${id}">
                      <div class="mb-3">
                        <div>
                          <img
                            src="${userAvatar}"
                            alt="profile-picture of user"
                            onerror="this.onerror=null;this.src='${placeholderImg}';"
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
              </div>
              <section id="updatePost">
                <div
                  class="modal fade"
                  id="updatePostModal${id}"
                  tabindex="-1"
                  aria-labelledby="updatePostModal"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content bg-secondary">
                      <div class="d-flex mx-3 mt-3 d-flex justify-content-end">
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body d-flex justify-content-center">
                        <form class="edit-form" id="${id}">
                          <div class="mb-3">
                            <h2 class="form-label text-left custom-label">
                              Update Post
                            </h2>
                            <div>
                              <div class="mb-3 mt-4">
                                <label for="update-title" class="form-label"
                                  >Title *</label
                                >
                                <textarea
                                  name="title"
                                  id="update-title"
                                  class="form-control post-input shadow"
                                  placeholder="Title"
                                  maxlength="280"
                                >${title}</textarea>
                              </div>
                              <label for="update-post" class="form-label">Body</label>
                              <textarea
                                name="body"
                                id="update-post"
                                class="form-control post-input shadow mb-3"
                                placeholder="What do you want to share?"
                              >${body}</textarea>
                              <div class="mb-3">
                                <label for="update-tags" class="form-label">Tags</label>
                                <input
                                  name="tags"
                                  type="text"
                                  id="update-tags"
                                  value="${tags}"
                                  class="form-control post-input shadow"
                                  placeholder="First tag, second tag, ..."
                                  pattern="^[a-zA-Z]+(,[a-zA-Z]+)*$"
                                  title="Tags need to be separated with comma ( , ) - Space is not allowed | Example: Tag1,Tag2,Tag3"
                                />
                              </div>
                              <div class="mb-3">
                                <label for="update-media" class="form-label"
                                  >Media</label
                                >
                                <input
                                  name="media"
                                  type="url"
                                  id="update-media"
                                  value="${media}"
                                  class="form-control post-input shadow"
                                  placeholder="Media must be a URL"
                                  title="media must be a fully formed URL that links to a live and publicly accessible image."
                                />
                              </div>
                            </div>
                          </div>
                          <button
                            type="submit"
                            class="btn btn-primary mt-4 mb-3 mx-3 px-6 text-center btn-custom shadow"
                          >
                            Save changes
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
      </section>`;
}
