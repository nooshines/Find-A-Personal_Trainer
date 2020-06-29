import page from "//unpkg.com/page/page.mjs";
import profileForm from "./profileForm.js";
import getTrainerProfileApi from "../api/trainer/getTrainerProfileApi.js";
import deleteProfileApi from "../api/trainer/deleteProfileApi.js";

const profile = async (ctx, next) => {
  const id = ctx.params.id;
  const getProfile = await getTrainerProfileApi();
  console.log(getProfile);
  if (getProfile) {
    $("#app").append(`
    <div class="container mx-auto mt-5" id="view-profile">
    <div class="row">
    <button id="edit-profile" class="btn btn-success">edit</button>
    <button id="delete-profile" class="btn btn-danger">delete</button>
    </div>
   
    <label>Name</label>
    <div>${getProfile.name}</div>
    <label>certificate</label>
    <div>${getProfile.certificate}</div>
    <label>address</label>
    <div>${getProfile.address}</div>
    <label>available</label>
    <div>${getProfile.available ? "yes" : "No"}</div>
    </div>
    

    `);
    $("#edit-profile").on("click", () => {
      profileForm(getProfile, "edit");
    });
    $("#delete-profile").on("click", () => {
      deleteProfileApi(getProfile._id).then(() => {
        page.redirect(`/profile/${id}`);
      });
    });
  } else {
    profileForm({}, "new");
  }
};

export default profile;
