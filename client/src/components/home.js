import page from "//unpkg.com/page/page.mjs";
import createTrainerApi from "../api/auth/createTrainerApi.js";

const home = (ctx, next) => {
  $("#app").append(`
 
  <header id="home-section">
  <div class="dark-overlay">
    <div class="home-inner container">
      <div class="row">
        <div class="col-lg-8 d-none d-lg-block">
        <h4> If you are a personal trainer</h4>
          <h1 class="display-4">Build a
            <strong>profile</strong> 
          </h1>
          <div class="d-flex">
            <div class="p-4 align-self-start">
              <i class="fas fa-check fa-2x"></i>
            </div>
            <div class="p-4 align-self-end">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, tempore iusto in minima facere dolorem!
            </div>
          </div>

          <div class="d-flex">
            <div class="p-4 align-self-start">
              <i class="fas fa-check fa-2x"></i>
            </div>
            <div class="p-4 align-self-end">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, tempore iusto in minima facere dolorem!
            </div>
          </div>

          <div class="d-flex">
            <div class="p-4 align-self-start">
              <i class="fas fa-check fa-2x"></i>
            </div>
            <div class="p-4 align-self-end">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, tempore iusto in minima facere dolorem!
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="card bg-danger text-center card-form">
            <div class="card-body">
              <h3>Sign Up Today</h3>
              <p>Please fill out this form to register</p>
              <form id="form-signup">
                <div class="form-group">
                  <input type="text" class="form-control form-control-lg" placeholder="Username" id="username">
                </div>
                <div class="form-group">
                  <input type="email" class="form-control form-control-lg" placeholder="Email" id="email">
                </div>
                <div class="form-group">
                  <input type="password" class="form-control form-control-lg" placeholder="Password" id="password" >
                </div>
               
                <input type="submit" value="Submit" class="btn btn-outline-light btn-block mb-4">
                <p class="mt=3">Already have an account ?</p>
                <a href="/login">Login</a> 
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>


<section id="search">
<div class="container">
  <div class="row">
    <div class="col text-center py-5">
      <h4 class="display-5">Are you looking for a personal trainer?</h4>
      <p class="lead">if you are looking for a personal trainer near you, just type in a location and find personal trainers around your location </p>
      <div class="form-group">
      <input type="password" class="form-control form-control-lg" placeholder="enter a location">
    </div>
    <div class="form-group">
    <input type="password" class="form-control form-control-lg" placeholder="distance">
  </div>
      <a href="#" class="btn btn-outline-secondary">Serach</a>
    </div>
  </div>
</div>
</section>

    `);
  $("#form-signup").submit((e) => {
    e.preventDefault();

    const formData = {
      username: $("#username").val(),
      email: $("#email").val(),
      password: $("#password").val(),
    };

    console.log(formData);
    createTrainerApi(formData).then((data) => {
      page.redirect("/profile");
      console.log(data);
    });
  });
};

export default home;
