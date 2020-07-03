import page from "//unpkg.com/page/page.mjs";
import updateBlogApi from "../api/blog/updateBlogApi.js";
import getBlogByUserIdBlogId from "../api/blog/getBlogByUserIdBlogId.js";

const blogForm = async (ctx, next) => {
  const id = ctx.params.id;
  const blogInfo = await getBlogByUserIdBlogId(id);
  console.log(blogInfo);
  $("#app").append(` 
  <header class="container mt-5 pt-3">
        <h1>Welcome </h1>
        <form id="blog-form">
          <div class="form-group">
             <label>title</label>
           <input id="title" type="text" name="name" value="${blogInfo.title}"></input>
        </div>
        <div class="form-group">
           <label>body</label>
           <input id="body" type="text" name="certificate" value="${blogInfo.body}"></input>
        </div>
     <button class="btn btn-danger">Submit</button>
        </form>
</header>
  `);

  $("#blog-form").submit((e) => {
    e.preventDefault();
    const formData = {
      title: $("#title").val(),
      body: $("#body").val(),
    };
    updateBlogApi(formData, blogInfo._id).then((data) => {
      console.log(data);
      page.redirect(`/blog`);
    });
  });
};

export default blogForm;
