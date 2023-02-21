import axios from "axios";

// axios.defaults.withCredentials = true;

const DEV_SERVER_URL = "http://127.0.0.1:3500/business/";

const PROD_SERVER_URL = "";

export const fetchProfileFunc = async (data) => {
  try {
    const { id, token } = data;
    const response = await axios.post(DEV_SERVER_URL + "profile", {
      id,
      token,
    });
    return response.data;
  } catch (error) {
    if (error.response.status == 500)
      return { error: error.response.data.error + ". " + "Please try again" };

    return { error: error.message + ". " + "Please try again" };
  }
};

export const fetchApikeysFunc = async (data) => {
  try {
    const { id, token } = data;

    const response = await axios.post(DEV_SERVER_URL + "apikeys", {
      id,
      token,
    });
    return response.data;
  } catch (error) {
    if (error.response.status == 500)
      return { error: error.response.data.error + ". " + "Please try again" };

    return { error: error.message + ". " + "Please try again" };
  }
};

export const createApikeyFunc = async (data) => {
  try {
    const { id, token } = data;

    const response = await axios.post(DEV_SERVER_URL + "new/apikeys", {
      id,
      token,
    });
    return response.data;
  } catch (error) {
    if (error.response.status == 500)
      return { error: error.response.data.error + ". " + "Please try again" };

    return { error: error.message + ". " + "Please try again" };
  }
};
