const updateBlogApi = async (data, blogId) => {
  try {
    const response = await fetch(`/api/blog/update/${blogId}`, {
      method: "PATCH",
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

export default updateBlogApi;
