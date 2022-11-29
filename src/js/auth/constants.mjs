export const API_BASE_URL = "https://api.noroff.dev/api/v1";
const register = "/social/auth/register";
export const API_REG_URL = `${API_BASE_URL}${register}`;
const login = "/social/auth/login";
export const API_LOGIN_URL = `${API_BASE_URL}${login}`;
const posts = "/social/posts?_author=true&_reactions=true&_comments=true";
export const API_POSTS_URL = `${API_BASE_URL}${posts}`;
const sendPost = "/social/posts";
export const API_SEND_URL = `${API_BASE_URL}${sendPost}`;
