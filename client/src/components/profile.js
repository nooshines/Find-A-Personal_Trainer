import page from "//unpkg.com/page/page.mjs";
import profileForm from "./profileForm.js";
import getTrainerProfileApi from "../api/trainer/getTrainerProfileApi.js";
import deleteProfileApi from "../api/trainer/deleteProfileApi.js";
import getBlogByIdApi from "../api/blog/getBlogByIdApi.js";
import blogForm from "../components/blogForm.js";
import deleteBlogApi from "../api/blog/deleteBlogApi.js";
import createBlogApi from "../api/blog/createBlogApi.js";
import profileNew from "./profileNew.js";

const profile = async (ctx, next) => {
  const id = ctx.params.id;
  const profileInfo = await getTrainerProfileApi();
  console.log("trainer profile:", profileInfo);
  if (profileInfo) {
    $("#app").append(`
  <h3 class="mt-5 pt-5">profile</h3>
    <label>Name</label>
    <div>${profileInfo.name}</div>
    <label>certificate</label>
    <div>${profileInfo.certificate}</div>
    <label>address</label>
    <div>${profileInfo.address}</div>
    <label>Bio</label>
    <div>${profileInfo.bio}</div>
    </div>

    <button id="edit-profile" class="btn btn-success">edit</button>
    <button id="delete-profile" class="btn btn-danger">delete</button>
    </div>
    <div>
    <button id="create-blog" class="btn btn-light mt-5">create blog</button>
    </div>
    `);

    $("#create-blog").on("click", () => {
      page.redirect("/blogForm");
    });

    $("#edit-profile").on("click", () => {
      page.redirect(`/profile/edit/${id}`);
    });
    $("#delete-profile").on("click", () => {
      deleteProfileApi(profileInfo._id).then(() => {
        page.redirect(`/profile/${id}`);
      });
    });
  } else {
    profileNew();
  }
  const blogInfo = await getBlogByIdApi(profileInfo.userId);
  console.log(blogInfo);
  if (blogInfo) {
    $("#app").append(`<h3 class="mt-5">blogs</h3>`);
    blogInfo.forEach((blog) => {
      $("#app").append(`
        <div>${blog.title}</div>
        <div>${blog.body}</div>
        <div>${blog.createdAt}</div>
        <button id="edit-blog" class="btn btn-success">edit</button>
        <button id="delete-blog" class="btn btn-danger">delete</button>
        `);
    });
    $("#edit-blog").on("click", () => {
      blogForm(blogInfo, "edit");
    });
    $("#delete-blog").on("click", () => {
      deleteBlogApi(blogInfo._id).then(() => {
        page.redirect(`/blog/${id}`);
      });
    });
  } else {
    $("#app").append(` <h3>there are no blogs</h3>`);
  }
};

export default profile;
