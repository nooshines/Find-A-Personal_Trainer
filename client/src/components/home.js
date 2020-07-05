import page from "//unpkg.com/page/page.mjs";
import createTrainerApi from "../api/auth/createTrainerApi.js";
import findTrainerApi from "../api/trainer/findTrainerApi.js";

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
              <h4 id="signedup-msg"></h4>
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

<form id="search-form">
    <div class="input-group mb-3">
  <input type="text" class="form-control" aria-label="Text input with dropdown button" placeholder="enter a location" id="location">
  <div class="form-group">

  <select class="form-control" id="form-select">
    <option value="sydney">Sydney</option>
    <option value="malbourne">Melbourne</option>
    <option value="perth">Perth</option>
  </select>
</div>
</div>
    <div class="form-group">
    <input type="text" class="form-control " placeholder="distance" id="distance">
  </div>
      <button class="btn btn-outline-secondary" id="search">Search</button>
   
    </div>
    </form>



  </div>
  <div id="mapid"></div>
</div>
</section>


    `);

  const mymap = L.map("mapid").setView([-33.87271, 151.207609], 13);
  L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoibm9vc2hpbmVzIiwiYSI6ImNrYzJtN2NsdjAzcWYycHAzMGJuZ2l5bjQifQ.dpz8OOGJk_7a3ArUBcR2Ew",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      accessToken: "your.mapbox.access.token",
    }
  ).addTo(mymap);

  $("#form-signup").submit((e) => {
    e.preventDefault();

    const formData = {
      username: $("#username").val(),
      email: $("#email").val(),
      password: $("#password").val(),
    };
    console.log(formData);
    //new trainer
    createTrainerApi(formData).then((data) => {
      setTimeout(() => {
        $("#signedup-msg").show().text("Successfully signed up");
      }, 3000);
      page.redirect("/login");
    });
  });

  $("#search-form").submit((event) => {
    event.preventDefault();
    const searchParams = {
      location: $("#location").val(),
      distance: $("#distance").val(),
      city: $("#form-select").val(),
    };
    console.log("location,distance,city", searchParams);
    findTrainerApi(searchParams).then((data) => {
      console.log("data:", data);
      if (data && data.length) {
        data.forEach((trainer) => {
          $("#app").append(`
          <div class="container mt-4">
        <h4>${trainer.name}</h4>
        <small class="mb-2">${trainer.address}</small>
        </div>
      `);
          L.marker([
            trainer.location.coordinates[1],
            trainer.location.coordinates[0],
          ]).addTo(mymap);
        });
      }
    });

    // page.redirect("/search/result");
  });
};

export default home;
