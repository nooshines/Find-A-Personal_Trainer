const getAllTrainerssApi = async () => {
  try {
    const response = await fetch("/api/api", {
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

export default getAllTrainerssApi;
