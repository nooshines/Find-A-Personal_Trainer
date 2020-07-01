import page from "//unpkg.com/page/page.mjs";
import logoutTrainerApi from "../api/auth/logoutTrainerApi.js";

const logout = (ctx, next) => {
  const btn = $(
    `<button class="btn btn-outline-secondary ml-5 logout-btn" id="container-center">Logout</button>`
  ).on("click", () => {
    logoutTrainerApi().then(() => {
      localStorage.removeItem("user");
      $("logout-btn").hide();
      setTimeout(() => {
        $("#app").append(`<h2>Successfully logged out</h2>`);
      }, 4000);
      page.redirect("/home");
    });
  });
  $("#app").append(btn);
};

export default logout;
