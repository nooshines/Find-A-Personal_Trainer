const getTrainerProfileApi = async () => {
  try {
    const response = await fetch(`/api/api/trainer/profile`);
    const result = await response.json();
    return result;
  } catch (e) {
    console.log(e);
  }
};

export default getTrainerProfileApi;
