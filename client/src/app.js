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
  page("/blog/:id", nav, blog);
  // page("/blog/edit/:id", nav, editblog);
  // page("/blog/new/:id", nav, newblog);
  // page("/profile/edit/:id", nav, editprofile);
  // page("/profile/new/:id", nav, newprofile);

  page({ hashbang: true });
};

//jquery on ready
$(() => {
  showPages();
});
