import page from "//unpkg.com/page/page.mjs";
import getBlogsByUserApi from "../api/blog/getBlogsByUserApi.js";
import deleteBlogApi from "../api/blog/deleteBlogApi.js";

const blog = async (ctx, next) => {
  const id = ctx.params.id;
  const blogs = await getBlogsByUserApi();
  console.log("blog info:", blogs);

  $("#app").append(
    `
    <div class="container" id="container-center">
    <button id="create-blog" class="btn btn-success mb-4"> + create blog</button>
    </div>
    `
  );
  $("#create-blog").on("click", () => {
    page.redirect(`/blog/new`);
  });

  if (blogs) {
    $("#app").append(`
    <div class="container" class="mt-3">
      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-header">
              <h4 class="text-dark">Latest Blogs</h4>
            </div>
            <table class="table table-striped">
              <thead class="thead-dark">
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Date</th>
                  <th></th>
                </tr>
              </thead>
              </table)
             `);

    blogs.forEach((blog) => {
      const momentData = moment(blog.updatedAt.substring(0, 23))
        .add(10, "hour")
        .format("MMMM Do YYYY, h:mm:ss a");
      console.log("moment", momentData);
      $("#app").append(`
      <div class="container">
      <table class="table bg-light">
              <tbody>
                <tr>
                  <td>#</td>
                  <td>${blog.title}</td>
                  <td></td>
                  <td>${momentData}</td>
                  <td>
                    <a href="/blog/edit/${blog._id}" class="btn btn-secondary">
                      Edit
                    </a>
                    <button data-blogid=${blog._id} class="delete-blog" class="btn btn-danger">delete</button>
                  </td>
                </tr>
                <tr></tr>
                </table>
                </div>`);
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
