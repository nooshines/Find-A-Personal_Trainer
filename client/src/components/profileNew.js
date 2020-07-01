import page from "//unpkg.com/page/page.mjs";
import createProfileApi from "../api/trainer/createProfileApi.js";

const profileNew = async () => {
  $("#view-profile").remove();
  $("#app").append(` 
  <header class="container mt-5 pt-3">
        <h1>Welcome </h1>
        <form id="trainer-form">
          <div class="form-group">
             <label>Name</label>
           <input type="text" name="name"></input>
        </div>
        <div class="form-group">
           <label>certificate</label>
           <input type="text" name="certificate"></input>
        </div>
        <div class="form-group">
           <label>address</label>
        <input type="text" name="address"></input>
        <div class="form-group">
        <label>Bio</label>
     <input type="text" name="bio"></input>
  </div>
     </div>
     <button class="btn btn-danger">Submit</button>
        </form>
</header>
  `);
  $("#trainer-form").submit((e) => {
    e.preventDefault();

    const formData = {
      name: $("input[name='name']").val(),
      certificate: $("input[name='certificate']").val(),
      address: $("input[name='address']").val(),
      bio: $("input[name='bio']").val(),
    };
    createProfileApi(formData).then((data) => {
      console.log("data", data);
      page.redirect(`/profile/${data.userId}`);
    });
  });
};

export default profileNew;
