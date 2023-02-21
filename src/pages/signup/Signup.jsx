import { registerFunc } from "@/api/authApi";
import Link from "next/link";
import React, { useState } from "react";
import { Error, Form, FormError, Input } from "./Signup.styles";

const SignUp = () => {
  const [registerData, setRegisterData] = useState({
    companyName: "",
    country: "",
    phone: "",
    address: "",
    clientName: "",
    position: "",
    password: "",
  });

  const [registerErrorData, setRegisterErrorData] = useState({
    companyName: "",
    country: "",
    phone: "",
    address: "",
    clientName: "",
    clientPosition: "",
    password: "",
    formError: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    registerFunc(registerData)
      .then((result) => {
        // handle success
        if (result.responseStatus == "success") {
          location.assign("/login");
        }

        // handle errore
        if (result.error.length == undefined) {
          setRegisterErrorData(result.error);
        } else {
          setRegisterErrorData({ formError: result.error });
          document.querySelector("p.form-error").classList.add("show");
          setTimeout(() => {
            setRegisterErrorData({ formError: "" });
            document.querySelector("p.form-error").classList.remove("show");
          }, 5000);
        }
      })
      .catch((err) => {
        setRegisterErrorData({
          formError:
            "Error occured refreshing page. If error persists contact admin",
        });
        document.querySelector("p.form-error").classList.add("show");
        setTimeout(() => {
          location.assign("/signup");
        }, 5000);
      });

    e.target.querySelectorAll(".input-error").forEach((el) => {
      el.innerHTML = "";
    });
  };

  const handleChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    e.target.parentElement.querySelector(".input-error").innerHTML = "";
  };

  return (
    <div className="p-2">
      <h3 className="center-align f-size-lrg">Create new account</h3>
      <div className="p-1">
        <p className="center-align">
          Or login to your account{" "}
          <Link href="/login" className="primary-color">
            Login
          </Link>
        </p>
      </div>
      <div className="flx">
        <Form onSubmit={handleSubmit}>
          <FormError className="input-error form-error">
            {registerErrorData.formError}
          </FormError>
          <div className="p-1">
            <h3 className="f-size-med">Company Information</h3>
            <Input>
              <label htmlFor="companyName">Company Name</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                onChange={handleChange}
              />
              <Error className="input-error">
                {registerErrorData.companyName}
              </Error>
            </Input>
            <div className="grd grd-cl-2">
              <Input>
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  onChange={handleChange}
                />
                <Error className="input-error"></Error>
              </Input>
              <Input>
                <label htmlFor="phone">Company Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  onChange={handleChange}
                />
                <Error className="input-error">{registerErrorData.phone}</Error>
              </Input>
            </div>
            <div className="grd grd-cl-2">
              <Input>
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  onChange={handleChange}
                />
                <Error className="input-error">
                  {registerErrorData.address}
                </Error>
              </Input>
            </div>
          </div>
          <div className="p-1">
            <h3 className="f-size-med">Your Information</h3>
            <div className="grd grd-cl-2">
              <Input>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="clientName"
                  onChange={handleChange}
                />
                <Error className="input-error">
                  {registerErrorData.clientName}
                </Error>
              </Input>
              <Input>
                <label htmlFor="position">Position</label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  onChange={handleChange}
                />
                <Error className="input-error">
                  {registerErrorData.position}
                </Error>
              </Input>
            </div>
          </div>
          <Input>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder=""
              onChange={handleChange}
            />
            <Error className="input-error">{registerErrorData.password}</Error>
          </Input>
          <Input>
            <button type="submit" className="btn">
              Sign Up
            </button>
          </Input>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
