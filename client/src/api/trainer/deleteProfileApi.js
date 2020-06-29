const deleteProfileApi = async (id) => {
  try {
    const response = await fetch(`/api/api/trainers/${id}`, {
      method: "DELETE",
      mode: "cors",
      credentials: "same-origin",
    });
    const result = await response.json();
    return result;
  } catch (e) {
    console.log(e);
  }
};

export default deleteProfileApi;
