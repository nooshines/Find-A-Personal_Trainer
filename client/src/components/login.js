import page from "//unpkg.com/page/page.mjs";
import loginTrainerApi from "../api/auth/loginTrainerApi.js";

const login = (ctx, next) => {
  $("#app").append(`
  <div class="container mx-auto" id="container-center">
    <form id="form-login">
        <div class="form-group">
            <label for="username">Username</label>
            <input type="text" class="form-control" id="username" 
                            placeholder="username..." name="username">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" 
                    id="password" name="password" placeholder="password...">
        </div>
        <button type="submit" class="btn btn-danger">Submit</button>
    </form>
    </div>
    `);

  $("#form-login").submit((e) => {
    e.preventDefault();

    const formData = {
      username: $("#username").val(),
      password: $("#password").val(),
    };
    loginTrainerApi(formData).then((data) => {
      console.log("data", data);
      page.redirect(`/profile/${data.id}`);
    });
  });
};

export default login;
