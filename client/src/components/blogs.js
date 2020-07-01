import page from "//unpkg.com/page/page.mjs";
import getAllBlogsApi from "../api/blog/getAllBlogsApi.js";

const addBlogsToDom = (blogs) => {
  console.log("blogs", blogs);

  blogs.forEach((blog) => {
    $("#app").append(` 
    <section id="blog" class="py-3">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="card-columns">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title text-dark">${blog.title}</h4>
                <small class="text-muted">Written by ? on ${blog.createdAt}</small>
                <hr>
                <p class="card-text text-dark">${blog.body}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    `);
  });
};

const blogs = (ctx, next) => {
  $("#app").append(` 

    <header id="blog-center" >
    <div class="container">
      <div class="row">
        <div class="col-md-6 m-auto text-center">
          <h1>Read Our Blog</h1>
        </div>
      </div>
    </div>
  </header>
  `);
  getAllBlogsApi().then((data) => {
    console.log(data);
    addBlogsToDom(data);
  });
};

export default blogs;
