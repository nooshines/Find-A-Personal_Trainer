import page from "//unpkg.com/page/page.mjs";

const nav = (ctx, next) => {
  $("#app").empty();
  $("#app")
    .append(` <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top" id="main-nav">
    <div class="container">
      <a href="index.html" class="navbar-brand">Find A Trainer</a>
      <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav ml-auto" id="navbar-list">
          <li class="nav-item">
            <a href="/home" class="nav-link">Home</a>
          </li>
          <li class="nav-item">
            <a href="/login" class="nav-link">Login</a>
          </li>
          <li class="nav-item">
            <a href="/logout" class="nav-link">Logout</a>
          </li>
         
          <li class="nav-item">
            <a href="/blogs" class="nav-link">Blogs</a>
          </li>
          <li class="nav-item">
            <a href="/trainers" class="nav-link">Trainers</a>
          </li>
        </ul>
      </div>
    </div>
  </nav> `);

  console.log("localstorage:", localStorage.getItem("user"));
  if (localStorage.getItem("user")) {
    const user = JSON.parse(localStorage.getItem("user"));
    $("#navbar-list").append(` <li class="nav-item">
    <a href="/profile/${user.id}" class="nav-link" id="profile">Profile</a>
  </li>`);
  }

  next(); // move onto next middleware
};

export default nav;
