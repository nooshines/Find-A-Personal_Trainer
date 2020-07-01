import page from "//unpkg.com/page/page.mjs";
import blogForm from "./blogForm.js";
import getBlogByIdApi from "../api/blog/getAllBlogsApi.js";
import updateBlogApi from "../api/blog/updateBlogApi.js";
import deleteBlogApi from "../api/blog/deleteBlogApi.js";

const blog = async (ctx, next) => {
  const id = ctx.params.id;
  const blogInfo = await getBlogByIdApi();
  console.log("blog info:", blogInfo);
  if (blogInfo) {
    $("#app").append(`
    <div class="container mx-auto mt-5" id="view-profile">
    <div class="row">
    <button id="edit-blog" class="btn btn-success">edit</button>
    <button id="delete-blog" class="btn btn-danger">delete</button>
    </div>
   
    <label>Name</label>
    <div>${blogInfo.title}</div>
    <label>certificate</label>
    <div>${blogInfo.body}</div>
    <label>address</label>
    <div>${blogInfo.createdAt}</div>
    </div>
    

    `);
    $("#edit-blog").on("click", () => {
      blogForm(blogInfo, "edit");
    });
    $("#delete-blog").on("click", () => {
      deleteBlogApi(blogInfo._id).then(() => {
        page.redirect(`/blog/${id}`);
      });
    });
  } else {
    blogForm({}, "new");
  }
};

export default blog;
