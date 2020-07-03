import page from "//unpkg.com/page/page.mjs";

page.configure({ window: window }); // bind to main window

//components
import nav from "./components/nav.js";
import login from "./components/login.js";
import home from "./components/home.js";
import profile from "./components/profile.js";
import logout from "./components/logout.js";
import trainers from "./components/trainers.js";
import blogs from "./components/blogs.js";
import blog from "./components/blog.js";
import profileForm from "./components/profileForm.js";
import blogForm from "./components/blogForm.js";
import profileNew from "./components/profileNew.js";
import blogNew from "./components/blogNew.js";
import searchResult from "./components/searchResult.js";

const showPages = () => {
  //configure routes

  page("/", () => {
    page.redirect("/home");
  });

  page("/home", nav, home);
  page("/login", nav, login);
  page("/profile/:id", nav, profile);
  page("/logout", nav, logout);
  page("/trainers", nav, trainers);
  page("/blogs", nav, blogs);
  page("/blog", nav, blog);
  page("/blog/new", nav, blogNew);
  page("/blog/edit/:id", nav, blogForm);
  page("/profile/edit/:id", nav, profileForm);
  page("/profile/new/:id", nav, profileNew);
  page("/search/result", nav, searchResult);

  page({ hashbang: true });
};

//jquery on ready
$(() => {
  showPages();
});
