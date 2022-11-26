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
  comments
) {
  let commentsHtml = "";
  comments.forEach(({ body: commentBody, owner }) => {
    commentsHtml += `<div class="comment-text card-text">
                      <div>
                        <h3 class="card-title custom-title ms-3 align-self-center">
                          ${owner}
                        </h3>
                      </div>
                      <div class="d-flex flex-row ms-5">
                        <p class="comment bg-secondary shadow">
                          ${commentBody}
                        </p>
                      </div>
                    </div>`;
  });

  let profileImage = avatar;
  if (profileImage === null || profileImage === "") {
    profileImage = "/assets/images/profile-image.png";
  } else {
    profileImage = avatar;
  }

  const postContainer = document.querySelector("#post-container");
  postContainer.innerHTML += `<div class="card mb-5 shadow">
                <p class="post-time me-2 mt-2 text-end">${created} </p>
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
                      <p class="card-text custom-text"><a class="me-2" href="#">Likes</a></p>
                      <p class="card-text custom-text">
                        <a
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseComment${id}"
                          aria-expanded="true"
                          aria-controls="collapseComment${id}"
                          href="collapseComment${id}"
                          >Comment</a
                        >
                      </p>
                      <p class="card-text custom-text">
                        <a href="post-specific.html?id=${id}">View Post</a>
                      </p>
                    </div>
                    <div class="d-flex gap-3 text-decoration-none ms-2 mb-0">
                      <p class="card-text custom-text">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#updatePostModal"
                          >Edit</a
                        >
                      </p>
                      <p class="card-text custom-text">
                        <a href="#">Delete</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="collapse collapse-comment" id="collapseComment${id}">
                  <div class="card card-body mt-2">
                    <form action="#">
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
