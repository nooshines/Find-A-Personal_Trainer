const updateProfileApi = async (data, id) => {
  try {
    const response = await fetch(`/api/api/trainers/${id}`, {
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

export default updateProfileApi;
