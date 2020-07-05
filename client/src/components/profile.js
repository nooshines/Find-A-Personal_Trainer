import page from "//unpkg.com/page/page.mjs";
import getTrainerProfileApi from "../api/trainer/getTrainerProfileApi.js";
import deleteProfileApi from "../api/trainer/deleteProfileApi.js";
import profileNew from "./profileNew.js";

const profile = async (ctx, next) => {
  const id = ctx.params.id;
  const profileInfo = await getTrainerProfileApi();
  console.log("trainer profile:", profileInfo);
  if (profileInfo) {
    $("#app").append(`
       
  <div class="container mb-5" id="container-center">
  <h3 class="mb-5">Welcome ${profileInfo.name}</h3>
    <div class="container mb-4">
      <div class="row">
        <div class="col-md-3">
          <a id="blog-page" class="btn btn-light btn-block text-dark">
            Blog
          </a>
        </div>
        <div class="col-md-3">
          <a id="edit-profile" class="btn btn-success btn-block">
            Edit Profile
          </a>
        </div>
        <div class="col-md-3">
          <a id="delete-profile" class="btn btn-danger btn-block">
            Delete Profile
          </a>
        </div>
      </div>
    </div>

  <!-- PROFILE -->
  <section id="profile">
    <div class="container">
      <div class="row">
        <div class="col-md-9">
          <div class="card">
            <div class="card-header">
              <h4 class="text-dark">Profile</h4>
            </div>
            <div class="card-body">
                <div class="form-group">
                  <label for="name" class="text-dark">Name</label>
                  <input type="text" class="form-control" value="${profileInfo.name}">
                </div>
                <div class="form-group">
                  <label for="certificate" class="text-dark">Certificate</label>
                  <input type="text" class="form-control" value="${profileInfo.certificate}">
                </div>
                <div class="form-group">
                  <label for="address" class="text-dark">Address</label>
                  <input type="text" class="form-control" value="${profileInfo.address}">
                </div>
                <div class="form-group">
                  <label for="bio" class="text-dark">Bio</label>
                  <textarea id="text-area" class="form-control" value="${profileInfo.bio}">${profileInfo.bio}</textarea>
                </div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <h3>Photo</h3>
          <img src="img/avatar.png" alt="" class="d-block img-fluid mb-3">
          <button class="btn btn-primary btn-block">Upload Image</button>
          <button class="btn btn-danger btn-block">Delete Image</button>
        </div>
      </div>
    </div>
  <div>
    `);

    console.log("textarea", $("#text-area").text());
    $("#blog-page").on("click", () => {
      console.log("profileInfo:", profileInfo);
      page.redirect(`/blog`);
    });

    $("#edit-profile").on("click", () => {
      page.redirect(`/profile/edit/${id}`);
    });
    $("#delete-profile").on("click", () => {
      deleteProfileApi(profileInfo._id).then(() => {
        page.redirect(`/profile/new/${id}`);
      });
    });
  } else {
    profileNew();
  }
};

export default profile;
