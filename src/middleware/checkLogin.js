import { isEqual, isAfter, isBefore } from "date-fns";

const checkLoginFunc = () => {
  const Profile = JSON.parse(localStorage.getItem("nmail"));

  if (Profile.token) {
    if (isAfter(new Date(Profile.expiresOn), new Date())) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

export default checkLoginFunc;
