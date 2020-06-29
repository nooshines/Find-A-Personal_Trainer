import page from "//unpkg.com/page/page.mjs";
// import getTrainerByIdApi from "../api/auth/getTrainerByIdApi.js";

const profile = (ctx, next) => {
  $("#app").append(`
  <header class="container mt-5 pt-3">
        <h1>Welcome </h1>
</header>
  `);
  // const id = ctx.params.id;
  // getTrainerByIdApi(id).then((data) => {
  //   console.log(data);
  // });
};

export default profile;
