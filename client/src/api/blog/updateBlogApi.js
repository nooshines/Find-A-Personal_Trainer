const updateBlogApi = async (data) => {
  try {
    const response = await fetch(`/api/blog/update/${id}`, {
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
