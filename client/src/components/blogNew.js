import page from "//unpkg.com/page/page.mjs";
import createBlogApi from "../api/blog/createBlogApi.js";

const blogNew = () => {
  $("#app").append(` 
  <div class="container mt-6 mb-5" id="container-center">
      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-header">
              <h4 class="text-dark">Create Blog</h4>
            </div>
            <div class="card-body">
              <form id="blog-form">
                <div class="form-group">
                  <label for="title" class="text-dark">Title</label>
                  <input id="title" type="text" class="form-control">
                </div>
                <div class="form-group">
                  <label for="image" class="text-dark">Upload Image</label>
                  <div class="custom-file">
                    <input type="file" class="custom-file-input" id="image">
                    <label for="image" class="custom-file-label">Choose File</label>
                  </div>
                  <small class="form-text text-muted">Max Size 3mb</small>
                </div>
                <div class="form-group">
                  <label for="body" class="text-dark">Body</label>
                  <textarea id="body" class="form-control"></textarea>
                </div>
                <button class="btn btn-outline-secondary">Save</button>
                <a href="/blog" class="btn btn-outline-secondary">Cancel</a>
              </form>
            </div>
          </div>
        </div>
      </div>
  </div>
  `);

  $("#blog-form").submit((e) => {
    e.preventDefault();
    const formData = {
      title: $("#title").val(),
      body: $("#body").val(),
    };
    console.log(formData);
    createBlogApi(formData).then((data) => {
      console.log("data", data);
      page.redirect(`/blog`);
    });
  });
};

export default blogNew;
