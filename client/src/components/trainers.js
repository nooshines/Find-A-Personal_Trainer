import getAllTrainersApi from "../api/trainer/getAllTrainersApi.js";

const addTrainersToDom = (trainers) => {
  $("#app").append(` 
  <h1 class="text-light mt-5 pt-5 text-center">
    Meet The Trainers
  </h1>
  <p class="lead text-center">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laborum numquam aperiam dolores a porro!
  </p>
`);
  trainers.forEach((trainer) => {
    console.log("trainer", trainer);
    $("#app").append(`
    <div class="container trainer-center">
      <div class="row">
        <div class="col-lg-3 col-md-6">
          <div class="card mb-5">
            <div class="card-body">
              <img src="" alt="" class="img-fluid rounded-circle w-50 mb-3">
              <h3 class="text-dark">${trainer.name}</h3>
              <h5 class="text-dark">${trainer.certificate}</h5>
              <h5 class="text-dark">${trainer.address}</h5>
              <p class="text-dark">${trainer.bio}</p>
              <div class="d-flex justify-content-center">
                <div class="p-4">
                  <a href="http://facebook.com">
                    <i class="fab fa-facebook"></i>
                  </a>
                </div>
                <div class="p-4">
                  <a href="http://twitter.com">
                    <i class="fab fa-twitter"></i>
                  </a>
                </div>
                <div class="p-4">
                  <a href="http://instagram.com">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
        </div>
    `);
  });
};
const trainers = (ctx, next) => {
  getAllTrainersApi().then((data) => {
    console.log(data);
    if (data && data.length) {
      addTrainersToDom(data);
    } else {
      $("#app").append(` 
      <h3 class="container mt-5 pt-5">There are No Trainers</h3>
      `);
    }
  });
};

export default trainers;
