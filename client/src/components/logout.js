import page from "//unpkg.com/page/page.mjs";
import logoutTrainerApi from "../api/auth/logoutTrainerApi.js";

const logout = (ctx, next) => {
  const btn = $(
    `<button class="btn btn-outline-secondary ml-5 logout-btn" id="container-center">Logout</button>`
  ).on("click", () => {
    logoutTrainerApi().then(() => {
      $("logout-btn").hide();
      // setTimeout(() => {
      //   $("#app").append.text("Successfully signed out");
      // }, 3000);
      page.redirect("/home");
    });
  });
  $("#app").append(btn);
};

export default logout;
