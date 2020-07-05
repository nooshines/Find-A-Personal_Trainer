import page from "//unpkg.com/page/page.mjs";
import updateProfileApi from "../api/trainer/updateProfileApi.js";
import getTrainerProfileApi from "../api/trainer/getTrainerProfileApi.js";

const profileForm = async (ctx, next) => {
  const id = ctx.params.id;
  const profile = await getTrainerProfileApi(id);
  console.log(profile);
  $("#app").append(` 
  <div class="container mt-6 mb-5" id="container-center">
      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-header">
              <h4 class="text-dark">EditProfile</h4>
            </div>
            <div class="card-body">
              <form id="trainer-form">
                <div class="form-group">
                  <label for="name" class="text-dark">Name</label>
                  <input id="name" type="text" class="form-control" value="${profile.name}">
                </div>
                <div class="form-group">
                  <label for="certificate" class="text-dark">Certificate</label>
                  <input id="certificate" type="text" class="form-control" value="${profile.certificate}">
                </div>
                <div class="form-group">
                <label for="address" class="text-dark">Address</label>
                <input id="address" type="text" class="form-control" value="${profile.address}">
              </div>
                <div class="form-group">
                  <label for="image" class="text-dark">Upload Image</label>
                  <div class="custom-file">
                    <input type="file" class="custom-file-input" id="image">
                    <label for="image" class="custom-file-label">Choose File</label>
                  </div>
                  <small class="form-text text-muted">Max Size 3mb</small>
                </div>
                <div class="form-group">
                  <label for="bio" class="text-dark">Bio</label>
                  <textarea id="bio" class="form-control" value="${profile.bio}">${profile.bio}</textarea>
                </div>
                <button class="btn btn-outline-secondary">Save</button>
                <a href="/profile/:id" class="btn btn-outline-secondary" id="search">Cancel</a>
              </form>
            </div>
          </div>
        </div>
      </div>
  </div>
  `);

  $("#trainer-form").submit((e) => {
    e.preventDefault();

    const imageData = new FormData();
    imageData.append("avatar", $("#image")[0].files[0]);

    const requestOptions = {
      method: "POST",
      body: imageData,
      redirect: "follow",
    };
    fetch("/api/fileupload", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

    const formData = {
      name: $("#name").val(),
      certificate: $("#certificate").val(),
      address: $("#address").val(),
      bio: $("#bio").val(),
    };
    updateProfileApi(formData, profile._id).then((data) => {
      console.log("data", data);
      page.redirect(`/profile/${data.userId}`);
    });
  });
};

export default profileForm;
