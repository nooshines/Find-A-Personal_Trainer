const getBlogByIdApi = async () => {
  console.log("getBlogByIdApi");
  try {
    const response = await fetch("/api/blog/trainerblog", {
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
