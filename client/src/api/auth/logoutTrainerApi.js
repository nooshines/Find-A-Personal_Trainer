const logoutTrainerApi = async () => {
  try {
    const response = await fetch("/api/auth/logout", {
      method: "GET",
      mode: "cors",
      credentials: "same-origin",
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export default logoutTrainerApi;
