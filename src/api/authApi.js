import axios from "axios";

// axios.defaults.withCredentials = true;

const DEV_SERVER_URL = "http://127.0.0.1:3500/business/";

const PROD_SERVER_URL = "";

export const registerFunc = async (data) => {
  try {
    const response = await axios.post(DEV_SERVER_URL + "/register", data);
    return response.data;
  } catch (error) {
    return { error: error.message + ". " + "Please try again" };
  }
};

export const signinFunc = async (data) => {
  try {
    const response = await axios.post(DEV_SERVER_URL + "/signin", data);
    return response.data;
  } catch (error) {
    return { error: error.message + ". " + "Please try again" };
  }
};
