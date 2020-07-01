const updateBlogApi = async (id) => {
  try {
    const response = await fetch(`/api/blog/update/${id}`, {
      method: "PATCH",
      mode: "cors",
      credentials: "same-origin",
    });
    const result = await response.json();
    return result;
  } catch (e) {
    console.log(e);
  }
};

export default updateBlogApi;
