const getTrainersByIdApi = async (id) => {
  try {
    const response = await fetch(`/api/api/trainers/${id}`, {
      method: "GET",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id),
    });
    const result = await response.json();
    return result;
  } catch (e) {
    console.log(e);
  }
};

export default getTrainersByIdApi;
