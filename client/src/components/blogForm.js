import page from "//unpkg.com/page/page.mjs";
import createBlogApi from "../api/blog/createBlogApi.js";
import updateBlogApi from "../api/blog/updateBlogApi.js";

const blogForm = (formValues = {}, type) => {
  $("#view-blog").remove();
  $("#app").append(` 
  <header class="container mt-5 pt-3">
        <h1>Welcome </h1>
        <form id="blog-form">
          <div class="form-group">
             <label>title</label>
           <input type="text" name="name" value="${
             formValues.title ? formValues.title : ""
           }"></input>
        </div>
        <div class="form-group">
           <label>body</label>
           <input type="text" name="certificate" value="${
             formValues.body ? formValues.body : ""
           }"></input>
        </div>
     <button class="btn btn-danger">Submit</button>
        </form>
</header>
  `);
  $("#blog-form").submit((e) => {
    e.preventDefault();

    const formData = {
      title: $("input[name='name']").val(),
      body: $("input[name='certificate']").val(),
      createdAt: $("input[name='address']").val(),
    };
    if (type === "new") {
      createBlogApi(formData).then((data) => {
        console.log("data", data);
        page.redirect(`/blog/${data.userId}`);
      });
    } else {
      updateBlogApi(formData, formValues._id).then((data) => {
        console.log("data", data);
        // page.redirect(`/blog/${data.userId}`);
      });
    }
  });
};

export default blogForm;
