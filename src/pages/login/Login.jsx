import { signinFunc } from "@/api/authApi";
import Link from "next/link";
import React, { useState } from "react";
import { Error, Form, FormError, Input } from "./Login.styles";
import { addDays } from "date-fns";

const Login = () => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [loginErrorData, setLoginErrorData] = useState({
    username: "",
    password: "",
    formError: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    signinFunc(loginData)
      .then((result) => {
        // handle success
        if (result.result) {
          if (result.result.responseStatus == "success") {
            localStorage.setItem(
              "nmail",
              JSON.stringify({
                id: result?.result?.id,
                clientName: result?.result?.clientName,
                position: result?.result?.position,
                expiresOn: addDays(new Date(), 2),
                token: result?.token,
              })
            );

            //document.cookie = `nmail_app_session=loggedIn;expires=${new Date()};path=/`;

            location.assign("/");
          } else if (result.result.responseStatus == "Error") {
            setLoginErrorData({
              ...loginErrorData,
              username: result.result.error.username,
              password: result.result.error.password,
            });
          }
        }

        // handle errore
        if (result?.error) {
          if (result.error?.length == undefined) {
            setLoginErrorData(result.error);
          } else {
            setLoginErrorData({ formError: result.error });
            document.querySelector("p.form-error").classList.add("show");
            setTimeout(() => {
              setLoginErrorData({ formError: "" });
              document.querySelector("p.form-error").classList.remove("show");
            }, 5000);
          }
        }
      })
      .catch((err) => {
        setLoginErrorData({
          formError:
            "Error occured refreshing page. If error persists contact admin",
        });
        document.querySelector("p.form-error").classList.add("show");
        setTimeout(() => {
          location.assign("/login");
        }, 5000);
      });

    e.target.querySelectorAll(".input-error").forEach((el) => {
      el.innerHTML = "";
    });
  };

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
    // e.target.parentElement.querySelector(".input-error").innerHTML = "";
  };
  return (
    <div className="p-2">
      <h3 className="center-align f-size-lrg">Login to your account</h3>
      <div className="p-1">
        <p className="center-align">
          Or create an account{" "}
          <Link href="/signup" className="primary-color">
            Sign Up
          </Link>
        </p>
      </div>
      <div className="flx">
        <Form onSubmit={handleLogin}>
          <FormError className="input-error form-error">
            {loginErrorData?.formError}
          </FormError>
          <Input>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="@nmail"
              name="username"
              onChange={handleChange}
            />
            <Error className="input-error">{loginErrorData?.username}</Error>
          </Input>
          <Input>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder=""
              name="password"
              onChange={handleChange}
            />
            <Error className="input-error">{loginErrorData?.password}</Error>
          </Input>
          <Input>
            <button type="submit" className="btn">
              Login
            </button>
          </Input>
        </Form>
      </div>
    </div>
  );
};

export default Login;
