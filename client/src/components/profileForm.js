import page from "//unpkg.com/page/page.mjs";
import createProfileApi from "../api/trainer/createProfileApi.js";
import updateProfileApi from "../api/trainer/updateProfileApi.js";

const profileForm = (formValues = {}, type) => {
  $("#view-profile").remove();
  $("#app").append(` 
  <header class="container mt-5 pt-3">
        <h1>Welcome </h1>
        <form id="trainer-form">
          <div class="form-group">
             <label>Name</label>
           <input type="text" name="name" value="${
             formValues.name ? formValues.name : ""
           }"></input>
        </div>
        <div class="form-group">
           <label>certificate</label>
           <input type="text" name="certificate" value="${
             formValues.certificate ? formValues.certificate : ""
           }"></input>
        </div>
        <div class="form-group">
           <label>address</label>
        <input type="text" name="address" value="${
          formValues.address ? formValues.address : ""
        }"></input>
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
    };
    if (type === "new") {
      createProfileApi(formData).then((data) => {
        console.log("data", data);
        page.redirect(`/profile/${data.userId}`);
      });
    } else {
      updateProfileApi(formData, formValues._id).then((data) => {
        console.log("data", data);
        page.redirect(`/profile/${data.userId}`);
      });
    }
  });
};

export default profileForm;
