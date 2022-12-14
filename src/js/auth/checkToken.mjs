import * as storage from "../storage/index.mjs";

export function checkToken() {
  const token = storage.load("accessToken");
  if (!token) {
    window.location.replace("/index.html");
  }
}
