const getBlogByIdApi = async (id) => {
  try {
    const response = await fetch(`/api/blog/${id}`, {
      method: "GET",
      mode: "cors",
      credentials: "same-origin",
    });
    const result = await response.json();
    return result;
  } catch (e) {
    console.log(e);
  }
};

export default getBlogByIdApi;
