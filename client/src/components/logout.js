import page from "//unpkg.com/page/page.mjs";
import logoutTrainerApi from "../api/auth/loginTrainerApi.js";

const logout = (ctx, next) => {
  const btn = $(
    `<button class="btn btn-outline-secondary ml-5" id="container-center">Logout</button>`
  ).on("click", () => {
    logoutTrainerApi().then(() => {});
  });
  $("#app").append(btn);
};

export default logout;
