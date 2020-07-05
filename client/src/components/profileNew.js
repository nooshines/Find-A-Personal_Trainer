import page from "//unpkg.com/page/page.mjs";
import createProfileApi from "../api/trainer/createProfileApi.js";

const profileNew = async () => {
  $("#app").append(` 
  <div class="container mt-6 mb-5" id="container-center">
      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-header">
              <h4 class="text-dark">Create Profile</h4>
            </div>
            <div class="card-body">
              <form id="trainer-form" action="/upload" method:"POST">
                <div class="form-group">
                  <label for="name" class="text-dark">Name</label>
                  <input id="name" type="text" class="form-control">
                </div>
                <div class="form-group">
                  <label for="certificate" class="text-dark">Certificate</label>
                  <input id="certificate" type="text" class="form-control">
                </div>
                <div class="form-group">
                <label for="address" class="text-dark">Address</label>
                <input id="address" type="text" class="form-control">
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
                  <textarea id="bio" name="editor" class="form-control"></textarea>
                </div>
                <button class="btn btn-outline-secondary" id="search">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
  </div>
  `);

  $("#trainer-form").submit((e) => {
    e.preventDefault();
    const formData = {
      name: $("#name").val(),
      certificate: $("#certificate").val(),
      address: $("#address").val(),
      bio: $("#bio").val(),
    };
    createProfileApi(formData).then((data) => {
      console.log("data", data);
      page.redirect(`/profile/${data.userId}`);
    });
  });
};

export default profileNew;
