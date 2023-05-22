import { fetchProfileFunc } from "@/api/mainApis";
import React, { useEffect, useState } from "react";
import { Grid } from "./Account.page.styles";

const Account = () => {
  const [ProfileData, setProfile] = useState({
    name: "",
    username: "",
    phone: "",
    country: "",
  });

  useEffect(() => {
    const Profile = JSON.parse(localStorage.getItem("nmail"));
    fetchProfileFunc({ id: Profile.id, token: Profile.token })
      .then((result) => {
        if (result.status == "Success") {
          setProfile({
            name: result.Profile.name,
            username: result.Profile.username,
            phone: result.Profile.phone,
            country: result.Profile.country,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="grd grd-cl-4">
        <Grid>
          <h3 className="">Company Name</h3>
          <p className="f-size-med light-txt">
            {ProfileData.name == "" ? "_______" : ProfileData.name}
          </p>
        </Grid>
        <Grid>
          <h3 className="">Company Username</h3>
          <p className="f-size-med light-txt">
            {ProfileData.username == "" ? "_______" : ProfileData.username}
          </p>
        </Grid>
        <Grid>
          <h3 className="">Company Phone Number</h3>
          <p className="f-size-med light-txt">
            {ProfileData.phone == "" ? "_______" : ProfileData.phone}
          </p>
        </Grid>
        <Grid>
          <h3 className="">Country</h3>
          <p className="f-size-med light-txt">
            {ProfileData.country == "" ? "_______" : ProfileData.country}
          </p>
        </Grid>
        <Grid>
          <h3 className="">Company Bio</h3>
          <p className="f-size-med light-txt">_______</p>
        </Grid>
        <Grid>
          <h3 className="">Account Type</h3>
          <p className="f-size-med light-txt">_______</p>
        </Grid>
      </div>
    </>
  );
};

export default Account;
