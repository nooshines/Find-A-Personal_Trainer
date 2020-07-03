import page from "//unpkg.com/page/page.mjs";
import createBlogApi from "../api/blog/createBlogApi.js";
import updateBlogApi from "../api/blog/updateBlogApi.js";

const blogNew = () => {
  $("#app").append(` 
  <header class="container mt-5 pt-3">
        <form id="blog-form">
          <div class="form-group">
             <label>title</label>
           <input id="title"type="text" name="name"></input>
        </div>
        <div class="form-group">
           <label>body</label>
           <input id="body" type="text" name="body"></input>
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
      // createdAt: $("input[name='address']").val(),
    };
    console.log(formData);
    createBlogApi(formData).then((data) => {
      console.log("data", data);
      page.redirect(`/blog`);
    });
  });
};

export default blogNew;
