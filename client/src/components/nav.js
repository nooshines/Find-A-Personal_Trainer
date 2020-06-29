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
        <ul class="navbar-nav ml-auto">
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
            <a href="/profile" class="nav-link">Profile</a>
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

  next(); // move onto next middleware
};

export default nav;
