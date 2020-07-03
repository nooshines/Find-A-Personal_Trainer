import page from "//unpkg.com/page/page.mjs";
import getBlogsByUserApi from "../api/blog/getBlogsByUserApi.js";
import deleteBlogApi from "../api/blog/deleteBlogApi.js";
import blogNew from "./blogNew.js";

const blog = async (ctx, next) => {
  const id = ctx.params.id;
  const blogs = await getBlogsByUserApi();
  console.log("blog info:", blogs);

  $("#app").append(
    `
    <div class="container" id="container-center">
    <button id="create-blog" class="btn btn-light">create blog</button>
    </div>
    `
  );
  $("#create-blog").on("click", () => {
    page.redirect(`/blog/new`);
  });

  if (blogs) {
    blogs.forEach((blog) => {
      $("#app").append(`
    <div class="container mx-auto mt-5" id="view-profile">
    <div class="row">
    <a href="/blog/edit/${blog._id}" class="btn btn-success">edit</a>
    <button data-blogid=${blog._id} class="delete-blog" class="btn btn-danger">delete</button>
    </div>
   
    <label>Name</label>
    <div>${blog.title}</div>
    <label>certificate</label>
    <div>${blog.body}</div>
    <label>address</label>
    <div>${blog.updatedAt}</div>
    </div>
    `);
    });
  } else {
    $("#app").append(
      `
      <div class="container" id="container-center">
      <h3>There are no blog</h3>
      </div>
      `
    );
  }

  $(".delete-blog").on("click", (e) => {
    const blogId = e.currentTarget.dataset.blogid;
    console.log("BlogId ", blogId);
    deleteBlogApi(blogId).then(() => {
      page.redirect(`/blog`);
    });
  });
};

export default blog;
