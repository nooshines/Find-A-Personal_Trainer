import page from "//unpkg.com/page/page.mjs";

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
              <form>
                <div class="form-group">
                  <input type="text" class="form-control form-control-lg" placeholder="Username">
                </div>
                <div class="form-group">
                  <input type="email" class="form-control form-control-lg" placeholder="Email">
                </div>
                <div class="form-group">
                  <input type="password" class="form-control form-control-lg" placeholder="Password">
                </div>
               
                <input type="submit" value="Submit" class="btn btn-outline-light btn-block">
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

    `);
};

export default home;
