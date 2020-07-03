import getAllBlogsApi from "../api/blog/getAllBlogsApi.js";

const addBlogsToDom = (blogs) => {
  console.log("blogs", blogs);
  $("#app").append(` 
  <div class="container text-center" id="blog-center"> 
        <h1>Read Our Blogs</h1>
  </div>
`);
  blogs.forEach((blog) => {
    $("#app").append(` 

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

    `);
  });
};

const blogs = (ctx, next) => {
  getAllBlogsApi().then((data) => {
    console.log(data);
    if (data && data.length) {
      addBlogsToDom(data);
    } else {
      $("#app").append(` 
      <h3 class="container mt-5 pt-5">There are No blogs</h3>
      `);
    }
  });
};

export default blogs;
