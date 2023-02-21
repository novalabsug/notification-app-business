import { createApikeyFunc, fetchApikeysFunc } from "@/api/mainApis";
import React, { useState, useEffect } from "react";
import {
  BtnContainer,
  EmptyContainer,
  Error,
  Grid,
  Icon,
  Input,
} from "./Apikey.page.styles";

const Apikeys = () => {
  const [ApikeysData, setApikeys] = useState({ apikeys: [] });
  const [errorData, setErrorData] = useState({ Error: "" });

  useEffect(() => {
    const Profile = JSON.parse(localStorage.getItem("nmail"));
    fetchApikeysFunc({ id: Profile.id, token: Profile.token })
      .then((result) => {
        if (result?.status == "Success") {
          setApikeys({ apikeys: result.Apikeys });
        }
      })
      .catch((err) => {
        console.log(err);
        setErrorData({
          Error:
            "Unexpected error occured. Error has been registered and will be worked upon",
        });
        document.querySelector(".error-container").classList.add("show");
        setTimeout(() => {
          setErrorData({ Error: "" });
          document.querySelector(".error-container").classList.remove("show");
        }, 5000);
      });
  }, []);

  console.log(errorData);

  const handleCreatingApikey = () => {
    const Profile = JSON.parse(localStorage.getItem("nmail"));
    createApikeyFunc({ id: Profile.id, token: Profile.token })
      .then((result) => {
        if (result?.status == "Success") {
          setApikeys({ apikeys: result.Apikeys });
        }
      })
      .catch((err) => {
        setErrorData({
          Error:
            "Unexpected error occured. Error has been registered and will be worked upon",
        });
        document.querySelector(".error-container").classList.add("show");
        setTimeout(() => {
          setErrorData({ Error: "" });
          document.querySelector(".error-container").classList.remove("show");
        }, 5000);
      });
  };

  return (
    <>
      <Error className="error-container">{errorData.Error}</Error>
      <div className="grd grd-cl-3">
        {ApikeysData.apikeys?.length > 0 ? (
          ApikeysData.apikeys?.map((apikey) => (
            <Grid>
              <Input>
                <p className="light-txt">{apikey}</p>
              </Input>
              <Icon>
                <i className="fa-solid fa-trash"></i>
              </Icon>
            </Grid>
          ))
        ) : (
          <EmptyContainer>
            <h3 className="f-size-med light-txt">No API KEYS available</h3>
          </EmptyContainer>
        )}
      </div>
      <BtnContainer>
        <button className="btn" onClick={handleCreatingApikey}>
          Create new ApiKey
        </button>
      </BtnContainer>
    </>
  );
};

export default Apikeys;
