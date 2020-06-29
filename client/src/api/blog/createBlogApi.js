const createBlogApi = async (data) => {
  try {
    const response = await fetch("/api/blog/new", {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  } catch (e) {
    console.log(e);
  }
};

export default createBlogApi;
