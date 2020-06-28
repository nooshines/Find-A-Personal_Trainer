import page from "//unpkg.com/page/page.mjs";

page.configure({ window: window }); // bind to main window

//components
import nav from "./components/nav.js";
import login from "./components/login.js";
import home from "./components/home.js";

const showPages = () => {
  //configure routes

  page("/", () => {
    page.redirect("/home");
  });

  // page("/home", nav, () => {
  //   $("#app").append("<h1>Home Route Reached</h1>");
  // });

  page("/login", nav, login);

  page("/home", nav, home);

  // page("/editlist/:id", nav, editList);

  page({ hashbang: true });
};

//jquery on ready
$(() => {
  showPages();
});
